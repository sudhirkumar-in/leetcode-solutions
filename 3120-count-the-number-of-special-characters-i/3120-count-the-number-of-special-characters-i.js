var numberOfSpecialChars = function (word) {
    let set = new Set()
    for (let ch of word) {
        set.add(ch)
    }

    let ct = 0;

    for (let ch of set) {
        const lower = ch.toLowerCase();
        const upper = ch.toUpperCase();

        if (set.has(lower) && set.has(upper)) {
            ct++;
            set.delete(lower)
            set.delete(upper)
        }
    }

    return ct;
};
