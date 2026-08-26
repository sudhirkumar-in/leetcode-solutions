/**
 * @param {number[]} digits
 * @return {number}
 */
var totalNumbers = function (digits) {
    digits.sort((a, b) => a - b)
    let n = digits.length
    let vis = new Array(n).fill(false)
    let res = []

    function bt(branch) {
        if (branch.length === 3) {
            if (digits[branch[0]] !== 0 &&
                digits[branch.at(-1)] % 2 === 0
            ) {
                res.push(branch.map(i => digits[i]))
            }
            return
        }

        for (let i = 0; i < n; i++) {
            if (vis[i]) continue
            if (digits[i - 1] === digits[i] && !vis[i - 1]) continue

            branch.push(i)
            vis[i] = true
            bt(branch)
            branch.pop()
            vis[i] = false
        }
    }

    bt([])

    return res.length
};