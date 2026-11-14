var removeAnagrams = function (words) {
    let ans = []

    for (let i = 0; i < words.length;) {
        let c = words[i] ?? ''
        let n = words[i + 1] ?? ''

        let c2 = c.split("").sort().join("")
        let n2 = n.split("").sort().join("")

        if (c2 === n2) {
            words.splice(i + 1, 1)
        } else {
            i++
        }

        if (ans.at(-1) !== c) {
            ans.push(c);
        }
    }
    return [...ans];
};

function getFreq(s) {
    let f = {}
    for (let c of s) {
        f[c] = (f[c] ?? 0) + 1
    }
    return f
}
