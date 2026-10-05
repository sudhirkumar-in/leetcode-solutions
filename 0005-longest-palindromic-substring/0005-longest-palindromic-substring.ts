function longestPalindrome(s: string): string {
    let n = s.length
    let res = ''

    for (let i = 0; i < n; i++) {
        let [s1, e1] = getPalindrome(s, i, i)
        let len1 = e1 - s1

        let [s2, e2] = getPalindrome(s, i, i + 1)
        let len2 = e2 - s2

        if (len1 >= res.length) {
            res = s.slice(s1, e1)
        }
        if (len2 >= res.length) {
            res = s.slice(s2, e2)
        }
    }

    return res
};

function getPalindrome(s, i, j) {
    let n = s.length
    let len = 0

    for (; i >= 0 && j < n && s[i] === s[j]; i--, j++) {
        if (i === j) len++
        else len += 2
    }

    return [i + 1, j]
}
