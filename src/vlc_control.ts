// deno-lint-ignore-file no-explicit-any
import { TCPAdapter, TCPAdapterCallback, TCPAdapterSession } from "@deno-plc/adapter-tcp";
import { vlcCommands } from "./vlc_commands.ts";

export class VLCControlInterface extends TCPAdapter {
    send_fn: ((data: Uint8Array<ArrayBufferLike>) => void) | undefined = undefined;
    public destroy: (() => void) | undefined = undefined;

    constructor(
        host: string,
        port: number,
        public password: string,
        public listeners: {
            onConnect?: (vlc: vlc) => void;
            onDisconnect?: () => void;
        } = {},
        public playlistUpdateInterval: number = 200,
    ) {
        super({
            host: host,
            port: port,
            label: "vlc",
            sessionFactory: (send: TCPAdapterCallback) => {
                return new VLCControlProtocolAdapterSession(this, send, playlistUpdateInterval);
            },
        });
    }
}

type Promisify<T extends { [x: string]: (...args: any) => any }> = {
    [K in keyof T]: (...args: Parameters<T[K]>) => Promise<ReturnType<T[K]>>;
};

export type vlc = {
    send: (data: string) => Promise<string>;
    getPlaylist: () => entry[];
} & Promisify<typeof vlcCommands>;

export type entry = {
    id: number;
    name: string;
    length: number;
    current: boolean;
};

class VLCControlProtocolAdapterSession implements TCPAdapterSession {
    vlc: vlc;
    connected = false;
    recvCallback: ((data: Uint8Array) => void) | undefined = undefined;
    queue: { data: string; recvCallback: (data: Uint8Array) => void }[] = [];
    interval: number | undefined = undefined;
    playlist: entry[] = [];

    constructor(
        readonly adapter: VLCControlInterface,
        public send: TCPAdapterCallback,
        public playlistUpdateInterval: number,
    ) {
        adapter.send_fn = send;

        this.vlc = {
            send: (data: string) => {
                const pwr = Promise.withResolvers<string>();

                const recvCallback = (d: Uint8Array) => {
                    const response = new TextDecoder().decode(d).trim();
                    pwr.resolve(response);
                };

                if (this.recvCallback) {
                    this.queue.push({ data, recvCallback });
                    return pwr.promise;
                }

                this.recvCallback = recvCallback;

                const encodedData = new TextEncoder().encode(data + "\n");
                this.send(encodedData);

                return pwr.promise;
            },
            getPlaylist: (() => {
                return this.playlist;
            }).bind(this),
            ...((() => {
                const cmds: { [key: string]: (...args: any) => Promise<string> } = {};

                Object.keys(vlcCommands).forEach((key) => {
                    cmds[key] = (...args: any) => {
                        return this.vlc.send((vlcCommands as any)[key](...args));
                    };
                });

                return cmds;
            })()),
        } as any;

        this.vlc.send(`${adapter.password}`).then((a) => {
            if (!a.includes("Wrong password")) {
                this.adapter.listeners.onConnect?.(this.vlc);

                this.interval = setInterval(() => {
                    this.vlc.send(vlcCommands.playlist()).then((response) => {
                        const playlist: entry[] = [];
                        let startedD = false;
                        let startedP = false;

                        const lines = response.split(/[\n]/).map((a) => a.replaceAll("\r", ""));
                        for (let i = 0; i < lines.length; i++) {
                            const line = lines[i];
                            if (line.startsWith("+----[ Playlist - ")) {
                                startedD = true;
                                continue;
                            }

                            if (!startedD) continue;

                            if (line.search(/^\|\s[0-9]+ - /) !== -1) {
                                if (startedP) break;
                                startedP = true;
                            }

                            if (startedP) {
                                const match = line.match(/^\|\s{2}[\s|\*][0-9]+ - .*$/);

                                if (match) {
                                    const entry = match[0];

                                    const current = entry.split("-")[0].includes("*");
                                    const id = parseInt(entry.split(" - ")[0].replaceAll(/[ |\*]/g, "").trim());
                                    const name = entry.split(" - ")[1].split(/ \(([0-9]{2}\:){2}[0-9]{2}\) (\[played [0-9]+ time[s]?\])?/)[0].trim().replace(/[played [0-9]+ time[s]?\]$/g, "").trim().replace(/ \(([0-9]{2}\:){2}[0-9]{2}\)$/g, "");
                                    const length = (entry.split(" - ")[1].match(/\(([0-9]{2}\:){3}\)($|( \[played [0-9]+ time[s]?\]))/) ?? ["00:00:00"])[0].split("[")[0].trim();

                                    playlist.push({
                                        id: id,
                                        name: name,
                                        length: length.split(":").reduce((acc, time) => (60 * acc) + parseInt(time), 0),
                                        current: current,
                                    });
                                }
                            }
                        }

                        this.playlist = playlist;
                    });
                }, this.playlistUpdateInterval);
            }
        });

        this.adapter.destroy = this.destroy.bind(this);
    }

    recv(d: Uint8Array): void {
        if (this.recvCallback) {
            this.recvCallback(d);

            if (this.queue.length > 0) {
                const nextData = this.queue.shift();

                this.recvCallback = nextData?.recvCallback;

                this.send(new TextEncoder().encode(nextData?.data + "\n"));
            } else {
                this.recvCallback = undefined;
            }
        }
    }

    destroy(): void {
        this.adapter.listeners.onDisconnect?.();
        clearInterval(this.interval);
        this.adapter.send_fn = undefined;
    }
}
