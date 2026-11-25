var balancedString = function (s) {
    const n = s.length
    const freq = new Map()

    for (const ch of s) {
        freq.set(ch, (freq.get(ch) ?? 0) + 1)
    }

    let i = 0
    let min = n

    for (let j = 0; j < n; j++) {
        freq.set(s[j], freq.get(s[j]) - 1)

        for (; i < n && isBalanced(n, freq); i++) {
            freq.set(s[i], freq.get(s[i]) + 1)

            min = Math.min(min, j - i + 1)
        }
    }

    return min
}

function isBalanced(n, freq) {
    return [...freq.values()].every((f) => f <= n / 4)
}