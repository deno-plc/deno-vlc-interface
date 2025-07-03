import { VLCControlInterface } from "../mod.ts";

new VLCControlInterface("localhost", 4212, "password", {
    onConnect(vlc) {
        setInterval(() => {
            const z = vlc.getPlaylist().findLast((e) => e.name === "Szene1")?.id;

            if (z) {
                vlc.goto(z);
            }
        }, 1000);
    },
});
