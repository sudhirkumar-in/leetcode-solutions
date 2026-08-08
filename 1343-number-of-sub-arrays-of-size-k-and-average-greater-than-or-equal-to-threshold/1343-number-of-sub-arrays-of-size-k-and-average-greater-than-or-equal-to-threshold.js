/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function (arr, k, threshold) {
    let sum = 0;
    // build first window
    for (let i = 0; i < k; i++) {
        sum += arr[i]
    }

    let count = 0;
    // check first window
    if (sum >= k * threshold) {
        count += 1
    }

    // slide window
    const n = arr.length
    for (let i = k; i < n; i++) {

        // outgoing
        sum -= arr[i - k]

        // incoming
        sum += arr[i]

        // check window
        if (sum >= k * threshold) {
            count += 1
        }
    }

    return count;

};