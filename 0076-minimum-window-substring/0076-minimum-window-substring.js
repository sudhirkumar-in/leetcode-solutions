/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    const need = new Map();
    const window = new Map();

    for (const ch of t) {
        need.set(ch, (need.get(ch) ?? 0) + 1);
    }

    let left = 0;
    let formed = 0;
    const required = need.size;

    let bestLen = Infinity;
    let bestStart = 0;

    for (let right = 0; right < s.length; right++) {

        const ch = s[right];

        if (need.has(ch)) {
            const count = (window.get(ch) ?? 0) + 1;
            window.set(ch, count);

            if (count === need.get(ch)) {
                formed++;
            }
        }

        while (formed === required) {

            const len = right - left + 1;

            if (len < bestLen) {
                bestLen = len;
                bestStart = left;
            }

            const leftCh = s[left];

            if (need.has(leftCh)) {
                const leftVal = window.get(leftCh);
                const newCount = leftVal - 1;

                window.set(leftCh, newCount);

                if (newCount < need.get(leftCh)) {
                    formed--;
                }
            }

            left++;
        }
    }

    return bestLen === Infinity
        ? ""
        : s.substring(bestStart, bestStart + bestLen);
};