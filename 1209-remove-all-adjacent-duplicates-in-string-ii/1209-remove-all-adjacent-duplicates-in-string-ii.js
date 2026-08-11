/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function (s, k) {
    const stack = []
    for (let i = 0; i < s.length; i++) {
        const [topCh, topVal] = stack.at(-1) ?? ['', 0];
        const ch = s[i]
        if (topCh === ch) {
            const [ch, val] = stack.pop()
            // remove from stack
            if (val + 1 !== k) {
                stack.push([ch, val + 1]);
            }
        } else {
            stack.push([ch, 1])
        }
    }

    const res = stack.map(([ch, val]) => ch.repeat(val)).join('')
    return res
};