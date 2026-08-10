/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
    // sliding window fixed
    const need = new Map();
    for (const ch of p) {
        need.set(ch, (need.get(ch) ?? 0) + 1)
    }
    const k = p.length;
    let res = []
    const window = new Map();
    let left = 0;
    let matched = 0;
    for (let right = 0; right < s.length; right++) {

        // incoming
        const ch = s[right];
        window.set(ch, (window.get(ch) ?? 0) + 1)
        if (need.has(ch)) {
            matched++;
        }
        // make it valid
        while (right - left + 1 > k) {
            const leftCh = s[left];
            if (need.has(leftCh)) {
                matched--;
            }
            const leftChCount = window.get(leftCh) - 1;
            if (leftChCount == 0) {
                window.delete(leftCh);
            } else {
                window.set(leftCh, leftChCount);
            }
            left++
        }
        // update result 
        // match the frequency

        if (right - left + 1 === k) {
            let same = true;

            for (const [key, val] of need) {
                if (window.get(key) !== val) {
                    same = false;
                    break;
                }
            }

            if (same) {
                res.push(left);
            }
        }
    }
    return res
};