function originalDigits(s: string): string {
    let order = 'gxzuwsfrtoi'
    let orderCharToWord = {
        g: ['eight', 8],
        x: ['six', 6],
        z: ['zero', 0],
        u: ['four', 4],
        w: ['two', 2],
        s: ['seven', 7],
        f: ['five', 5],
        r: ['three', 3],
        o: ['one', 1],
        i: ['nine', 9],
    }

    let o = {}
    for (let ch of s) {
        o[ch] = o[ch] ?? 0
        o[ch]++
    }

    let res = []
    for (let ch of order) {
        if (o[ch] !== undefined) {
            let freq = o[ch]
            if (!freq) continue

            let [numWord, num] = orderCharToWord[ch]
            for (let ch2 of numWord) {
                o[ch2] -= freq
            }

            while (freq--) {
                res.push(num)
            }
        }
    }

    return res.sort((a, b) => a - b).join("")
};
