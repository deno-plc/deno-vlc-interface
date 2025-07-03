export const vlcCommands = {
    /**
     * Add XYZ to the playlist
     * Syntax: add XYZ
     */
    add: (xyz: string): string => `add ${xyz}`,

    /**
     * Queue XYZ to playlist
     * Syntax: enqueue XYZ
     */
    enqueue: (xyz: string): string => `enqueue ${xyz}`,

    /**
     * Show items currently in playlist
     * Syntax: playlist
     */
    playlist: (): string => `playlist`,

    /**
     * Search for items in playlist (or reset search)
     * Syntax: search [string]
     */
    search: (query?: string): string => `search ${query || ""}`.trim(),

    /**
     * Delete item X in playlist
     * Syntax: delete [X]
     */
    delete: (x: number): string => `delete ${x}`,

    /**
     * Move item X in playlist after Y
     * Syntax: move [X][Y]
     */
    move: (x: number, y: number): string => `move ${x} ${y}`,

    /**
     * Sort the playlist
     * Syntax: sort key
     */
    sort: (key: string): string => `sort ${key}`,

    /**
     * Show services discovery or toggle
     * Syntax: sd [sd]
     */
    sd: (sd?: string): string => `sd ${sd || ""}`.trim(),

    /**
     * Play stream
     * Syntax: play
     */
    play: (): string => `play`,

    /**
     * Stop stream
     * Syntax: stop
     */
    stop: (): string => `stop`,

    /**
     * Next playlist item
     * Syntax: next
     */
    next: (): string => `next`,

    /**
     * Previous playlist item
     * Syntax: prev
     */
    prev: (): string => `prev`,

    /**
     * Goto item at index
     * Syntax: goto, gotoitem
     */
    goto: (index: number): string => `goto ${index}`,

    /**
     * Toggle playlist repeat
     * Syntax: repeat [on|off]
     */
    repeat: (state?: "on" | "off"): string => `repeat ${state || ""}`.trim(),

    /**
     * Toggle playlist loop
     * Syntax: loop [on|off]
     */
    loop: (state?: "on" | "off"): string => `loop ${state || ""}`.trim(),

    /**
     * Toggle playlist random
     * Syntax: random [on|off]
     */
    random: (state?: "on" | "off"): string => `random ${state || ""}`.trim(),

    /**
     * Clear the playlist
     * Syntax: clear
     */
    clear: (): string => `clear`,

    /**
     * Current playlist status
     * Syntax: status
     */
    status: (): string => `status`,

    /**
     * Set/get title in current item
     * Syntax: title [X]
     */
    title: (x?: number): string => `title ${x || ""}`.trim(),

    /**
     * Next title in current item
     * Syntax: title_n
     */
    title_n: (): string => `title_n`,

    /**
     * Previous title in current item
     * Syntax: title_p
     */
    title_p: (): string => `title_p`,

    /**
     * Set/get chapter in current item
     * Syntax: chapter [X]
     */
    chapter: (x?: number): string => `chapter ${x || ""}`.trim(),

    /**
     * Next chapter in current item
     * Syntax: chapter_n
     */
    chapter_n: (): string => `chapter_n`,

    /**
     * Previous chapter in current item
     * Syntax: chapter_p
     */
    chapter_p: (): string => `chapter_p`,

    /**
     * Seek in seconds
     * Syntax: seek X
     */
    seek: (x: number): string => `seek ${x}`,

    /**
     * Toggle pause
     * Syntax: pause
     */
    pause: (): string => `pause`,

    /**
     * Set to maximum rate
     * Syntax: fastforward
     */
    fastforward: (): string => `fastforward`,

    /**
     * Set to minimum rate
     * Syntax: rewind
     */
    rewind: (): string => `rewind`,

    /**
     * Faster playing of stream
     * Syntax: faster
     */
    faster: (): string => `faster`,

    /**
     * Slower playing of stream
     * Syntax: slower
     */
    slower: (): string => `slower`,

    /**
     * Normal playing of stream
     * Syntax: normal
     */
    normal: (): string => `normal`,

    /**
     * Set playback rate to value
     * Syntax: rate [playback rate]
     */
    rate: (playbackRate: number): string => `rate ${playbackRate}`,

    /**
     * Play frame by frame
     * Syntax: frame
     */
    frame: (): string => `frame`,

    /**
     * Toggle fullscreen
     * Syntax: fullscreen, f, F [on|off]
     */
    fullscreen: (state?: "on" | "off"): string => `fullscreen ${state || ""}`.trim(),

    /**
     * Information about the current stream (or specified id)
     * Syntax: info [X]
     */
    info: (x?: string): string => `info ${x || ""}`.trim(),

    /**
     * Show statistical information
     * Syntax: stats
     */
    stats: (): string => `stats`,

    /**
     * Seconds elapsed since stream's beginning
     * Syntax: get_time
     */
    get_time: (): string => `get_time`,

    /**
     * 1 if a stream plays, 0 otherwise
     * Syntax: is_playing
     */
    is_playing: (): string => `is_playing`,

    /**
     * The title of the current stream
     * Syntax: get_title
     */
    get_title: (): string => `get_title`,

    /**
     * The length of the current stream
     * Syntax: get_length
     */
    get_length: (): string => `get_length`,

    /**
     * Set/get audio volume
     * Syntax: volume [X]
     */
    volume: (x?: number): string => `volume ${x || ""}`.trim(),

    /**
     * Raise audio volume X steps
     * Syntax: volup [X]
     */
    volup: (x?: number): string => `volup ${x || ""}`.trim(),

    /**
     * Lower audio volume X steps
     * Syntax: voldown [X]
     */
    voldown: (x?: number): string => `voldown ${x || ""}`.trim(),

    /**
     * Set/get stereo audio output mode
     * Syntax: achan [X]
     */
    achan: (x?: string): string => `achan ${x || ""}`.trim(),

    /**
     * Set/get audio track
     * Syntax: atrack [X]
     */
    atrack: (x?: number): string => `atrack ${x || ""}`.trim(),

    /**
     * Set/get video track
     * Syntax: vtrack [X]
     */
    vtrack: (x?: number): string => `vtrack ${x || ""}`.trim(),

    /**
     * Set/get video aspect ratio
     * Syntax: vratio [X]
     */
    vratio: (x?: string): string => `vratio ${x || ""}`.trim(),

    /**
     * Set/get video crop
     * Syntax: vcrop, crop [X]
     */
    vcrop: (x?: string): string => `vcrop ${x || ""}`.trim(),

    /**
     * Set/get video zoom
     * Syntax: vzoom, zoom [X]
     */
    vzoom: (x?: string): string => `vzoom ${x || ""}`.trim(),

    /**
     * Set/get video deinterlace
     * Syntax: vdeinterlace [X]
     */
    vdeinterlace: (x?: string): string => `vdeinterlace ${x || ""}`.trim(),

    /**
     * Set/get video deinterlace mode
     * Syntax: vdeinterlace_mode [X]
     */
    vdeinterlace_mode: (x?: string): string => `vdeinterlace_mode ${x || ""}`.trim(),

    /**
     * Take video snapshot
     * Syntax: snapshot
     */
    snapshot: (): string => `snapshot`,

    /**
     * Set/get subtitle track
     * Syntax: strack [X]
     */
    strack: (x?: number): string => `strack ${x || ""}`.trim(),

    /**
     * Describe this module
     * Syntax: description
     */
    description: (): string => `description`,

    /**
     * A help message
     * Syntax: help, ? [pattern]
     */
    help: (pattern?: string): string => `help ${pattern || ""}`.trim(),

    /**
     * A longer help message
     * Syntax: longhelp [pattern]
     */
    longhelp: (pattern?: string): string => `longhelp ${pattern || ""}`.trim(),

    /**
     * Lock the telnet prompt
     * Syntax: lock
     */
    lock: (): string => `lock`,

    /**
     * Exit (if in a socket connection)
     * Syntax: logout
     */
    logout: (): string => `logout`,

    /**
     * Quit VLC (or logout if in a socket connection)
     * Syntax: quit
     */
    quit: (): string => `quit`,

    /**
     * Shutdown VLC
     * Syntax: shutdown
     */
    shutdown: (): string => `shutdown`,
};
