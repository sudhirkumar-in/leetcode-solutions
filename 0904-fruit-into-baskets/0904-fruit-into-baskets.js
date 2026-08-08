/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
    let left = 0;
    let best = 0;
    const freq = new Map();

    for (let right = 0; right < fruits.length; right++) {

        // 1. Add incoming fruit
        const key = fruits[right];
        const curr = freq.get(key) ?? 0;
        freq.set(key, curr + 1)

        // 2. Shrink while there are more than 2 types
        while (freq.size > 2) {
            const leftEle = fruits[left];
            const currLeft = freq.get(leftEle);
            if (currLeft == 1) {
                // instead of making zero , remove it from freq
                freq.delete(leftEle)
            } else {
                freq.set(leftEle, currLeft - 1)
            }
            left++;
        }

        // 3. Update best
        best = Math.max(best, right - left + 1)

    }

    return best;
};