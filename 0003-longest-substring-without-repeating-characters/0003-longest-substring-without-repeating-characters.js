/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let left = 0;
    let right = 0;
    let best = 0;
    const windowSet = new Set();
    for (; right < s.length; right++) {
        // get the curr and remove it and make window  valid
        const curr = s[right];
        while (windowSet.has(curr)) {
            let el = s[left];
            // remove it 
            windowSet.delete(el);
            // increaset the left 
            left += 1;
        }
        // add the curr element to window
        windowSet.add(curr);
        // get the best 
        best = Math.max(best, right - left + 1)

    }


    return best;
};