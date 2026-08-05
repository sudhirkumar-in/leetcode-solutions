/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function (cardPoints, k) {
    let leftmost = 0;
    let rightmost = 0;
    let best = 0;
    for (let i = 0; i < k; i++) {
        leftmost += cardPoints[i]
    }
    best = leftmost;
    let counter = 1;
    let len = cardPoints.length;
    for (; leftmost > 0;) {
        // remove last element from leftmost 
        // add the last element of card to rightmost
        leftmost -= cardPoints[k - counter];
        rightmost += cardPoints[len - counter];
        // get the best
        best = Math.max(best, leftmost + rightmost)
        counter++;
    }
    best = Math.max(best, rightmost);
    return best;
};