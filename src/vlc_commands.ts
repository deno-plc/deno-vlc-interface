export const vlcCommands = {
    /**
     * Add XYZ to the playlist
     * Syntax: add XYZ
     */
    add: (xyz: string) => `add ${xyz}`,

    /**
     * Queue XYZ to playlist
     * Syntax: enqueue XYZ
     */
    enqueue: (xyz: string) => `enqueue ${xyz}`,

    /**
     * Show items currently in playlist
     * Syntax: playlist
     */
    playlist: () => `playlist`,

    /**
     * Search for items in playlist (or reset search)
     * Syntax: search [string]
     */
    search: (query?: string) => `search ${query || ""}`.trim(),

    /**
     * Delete item X in playlist
     * Syntax: delete [X]
     */
    delete: (x: number) => `delete ${x}`,

    /**
     * Move item X in playlist after Y
     * Syntax: move [X][Y]
     */
    move: (x: number, y: number) => `move ${x} ${y}`,

    /**
     * Sort the playlist
     * Syntax: sort key
     */
    sort: (key: string) => `sort ${key}`,

    /**
     * Show services discovery or toggle
     * Syntax: sd [sd]
     */
    sd: (sd?: string) => `sd ${sd || ""}`.trim(),

    /**
     * Play stream
     * Syntax: play
     */
    play: () => `play`,

    /**
     * Stop stream
     * Syntax: stop
     */
    stop: () => `stop`,

    /**
     * Next playlist item
     * Syntax: next
     */
    next: () => `next`,

    /**
     * Previous playlist item
     * Syntax: prev
     */
    prev: () => `prev`,

    /**
     * Goto item at index
     * Syntax: goto, gotoitem
     */
    goto: (index: number) => `goto ${index}`,

    /**
     * Toggle playlist repeat
     * Syntax: repeat [on|off]
     */
    repeat: (state?: "on" | "off") => `repeat ${state || ""}`.trim(),

    /**
     * Toggle playlist loop
     * Syntax: loop [on|off]
     */
    loop: (state?: "on" | "off") => `loop ${state || ""}`.trim(),

    /**
     * Toggle playlist random
     * Syntax: random [on|off]
     */
    random: (state?: "on" | "off") => `random ${state || ""}`.trim(),

    /**
     * Clear the playlist
     * Syntax: clear
     */
    clear: () => `clear`,

    /**
     * Current playlist status
     * Syntax: status
     */
    status: () => `status`,

    /**
     * Set/get title in current item
     * Syntax: title [X]
     */
    title: (x?: number) => `title ${x || ""}`.trim(),

    /**
     * Next title in current item
     * Syntax: title_n
     */
    title_n: () => `title_n`,

    /**
     * Previous title in current item
     * Syntax: title_p
     */
    title_p: () => `title_p`,

    /**
     * Set/get chapter in current item
     * Syntax: chapter [X]
     */
    chapter: (x?: number) => `chapter ${x || ""}`.trim(),

    /**
     * Next chapter in current item
     * Syntax: chapter_n
     */
    chapter_n: () => `chapter_n`,

    /**
     * Previous chapter in current item
     * Syntax: chapter_p
     */
    chapter_p: () => `chapter_p`,

    /**
     * Seek in seconds
     * Syntax: seek X
     */
    seek: (x: number) => `seek ${x}`,

    /**
     * Toggle pause
     * Syntax: pause
     */
    pause: () => `pause`,

    /**
     * Set to maximum rate
     * Syntax: fastforward
     */
    fastforward: () => `fastforward`,

    /**
     * Set to minimum rate
     * Syntax: rewind
     */
    rewind: () => `rewind`,

    /**
     * Faster playing of stream
     * Syntax: faster
     */
    faster: () => `faster`,

    /**
     * Slower playing of stream
     * Syntax: slower
     */
    slower: () => `slower`,

    /**
     * Normal playing of stream
     * Syntax: normal
     */
    normal: () => `normal`,

    /**
     * Set playback rate to value
     * Syntax: rate [playback rate]
     */
    rate: (playbackRate: number) => `rate ${playbackRate}`,

    /**
     * Play frame by frame
     * Syntax: frame
     */
    frame: () => `frame`,

    /**
     * Toggle fullscreen
     * Syntax: fullscreen, f, F [on|off]
     */
    fullscreen: (state?: "on" | "off") => `fullscreen ${state || ""}`.trim(),

    /**
     * Information about the current stream (or specified id)
     * Syntax: info [X]
     */
    info: (x?: string) => `info ${x || ""}`.trim(),

    /**
     * Show statistical information
     * Syntax: stats
     */
    stats: () => `stats`,

    /**
     * Seconds elapsed since stream's beginning
     * Syntax: get_time
     */
    get_time: () => `get_time`,

    /**
     * 1 if a stream plays, 0 otherwise
     * Syntax: is_playing
     */
    is_playing: () => `is_playing`,

    /**
     * The title of the current stream
     * Syntax: get_title
     */
    get_title: () => `get_title`,

    /**
     * The length of the current stream
     * Syntax: get_length
     */
    get_length: () => `get_length`,

    /**
     * Set/get audio volume
     * Syntax: volume [X]
     */
    volume: (x?: number) => `volume ${x || ""}`.trim(),

    /**
     * Raise audio volume X steps
     * Syntax: volup [X]
     */
    volup: (x?: number) => `volup ${x || ""}`.trim(),

    /**
     * Lower audio volume X steps
     * Syntax: voldown [X]
     */
    voldown: (x?: number) => `voldown ${x || ""}`.trim(),

    /**
     * Set/get stereo audio output mode
     * Syntax: achan [X]
     */
    achan: (x?: string) => `achan ${x || ""}`.trim(),

    /**
     * Set/get audio track
     * Syntax: atrack [X]
     */
    atrack: (x?: number) => `atrack ${x || ""}`.trim(),

    /**
     * Set/get video track
     * Syntax: vtrack [X]
     */
    vtrack: (x?: number) => `vtrack ${x || ""}`.trim(),

    /**
     * Set/get video aspect ratio
     * Syntax: vratio [X]
     */
    vratio: (x?: string) => `vratio ${x || ""}`.trim(),

    /**
     * Set/get video crop
     * Syntax: vcrop, crop [X]
     */
    vcrop: (x?: string) => `vcrop ${x || ""}`.trim(),

    /**
     * Set/get video zoom
     * Syntax: vzoom, zoom [X]
     */
    vzoom: (x?: string) => `vzoom ${x || ""}`.trim(),

    /**
     * Set/get video deinterlace
     * Syntax: vdeinterlace [X]
     */
    vdeinterlace: (x?: string) => `vdeinterlace ${x || ""}`.trim(),

    /**
     * Set/get video deinterlace mode
     * Syntax: vdeinterlace_mode [X]
     */
    vdeinterlace_mode: (x?: string) => `vdeinterlace_mode ${x || ""}`.trim(),

    /**
     * Take video snapshot
     * Syntax: snapshot
     */
    snapshot: () => `snapshot`,

    /**
     * Set/get subtitle track
     * Syntax: strack [X]
     */
    strack: (x?: number) => `strack ${x || ""}`.trim(),

    /**
     * Describe this module
     * Syntax: description
     */
    description: () => `description`,

    /**
     * A help message
     * Syntax: help, ? [pattern]
     */
    help: (pattern?: string) => `help ${pattern || ""}`.trim(),

    /**
     * A longer help message
     * Syntax: longhelp [pattern]
     */
    longhelp: (pattern?: string) => `longhelp ${pattern || ""}`.trim(),

    /**
     * Lock the telnet prompt
     * Syntax: lock
     */
    lock: () => `lock`,

    /**
     * Exit (if in a socket connection)
     * Syntax: logout
     */
    logout: () => `logout`,

    /**
     * Quit VLC (or logout if in a socket connection)
     * Syntax: quit
     */
    quit: () => `quit`,

    /**
     * Shutdown VLC
     * Syntax: shutdown
     */
    shutdown: () => `shutdown`,
};
