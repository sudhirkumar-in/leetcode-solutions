let cl = console.log

function lengthOfLIS(a: number[]): number {
    let n = a.length
    let maxLen = 0
    let memo = new Array(n + 1).fill(0)

    function rec(i, len) {
        if (len > memo[i]) {
            memo[i] = len
        } else {
            return
        }

        maxLen = Math.max(maxLen, len)

        for (let r = i + 1; r < n; r++) {
            if (a[i] < a[r]) {
                rec(r, len + 1)
            }
        }
    }

    for (let i = 0; i < n; i++) {
        rec(i, 1)
    }

    return maxLen
};

function lengthOfLIS22222222222(a: number[]): number {
    let n = a.length
    let maxLen = 0

    return a.length
};
