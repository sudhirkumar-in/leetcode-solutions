function repeatedCharacter(s: string): string {
    let set = new Set()

    for (let e of s) {
        if (set.has(e)) {
            return e
        }
        set.add(e)
    }

    return ''
};
