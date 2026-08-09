/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    const need = new Map();
    const window = new Map();

    // Build frequency of s1
    for (const ch of s1) {
        need.set(ch, (need.get(ch) ?? 0) + 1);
    }

    let left = 0;

    for (let right = 0; right < s2.length; right++) {

        // Add incoming character
        const ch = s2[right];
        window.set(ch, (window.get(ch) ?? 0) + 1);

        // Window too big → remove from left
        if (right - left + 1 > s1.length) {
            const leftCh = s2[left];
            const count = window.get(leftCh);

            if (count === 1) {
                window.delete(leftCh);
            } else {
                window.set(leftCh, count - 1);
            }

            left++;
        }

        // Check when window has exactly s1.length characters
        if (right - left + 1 === s1.length) {
            let same = true;

            for (const [key, val] of need) {
                if (window.get(key) !== val) {
                    same = false;
                    break;
                }
            }

            if (same) {
                return true;
            }
        }
    }

    return false;
};