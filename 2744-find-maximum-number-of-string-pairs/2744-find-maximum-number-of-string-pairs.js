var maximumNumberOfStringPairs = function (words) {
    let set = new Set(words)
    let ct = 0

    for (let s of set) {
        set.delete(s)

        let sRev = [...s].reverse().join("")
        if (set.has(sRev)) {
            ct++
        }
    }

    return ct
};
