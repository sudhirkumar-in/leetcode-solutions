/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (arr) {

    if (arr.length <= 1) return arr; // Base case: if array has one or zero elements, it's already sorted

    const mid = Math.floor(arr.length / 2); // Find the middle point
    const left = sortArray(arr.slice(0, mid)); // Recursively sort the left half
    const right = sortArray(arr.slice(mid)); // Recursively sort the right half

    return merge(left, right); // Merge the two sorted halves

};
function merge(left, right) {
    const result = [];
    let i = 0,
        j = 0;

    // Compare and merge elements from both arrays
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i++]); // Add the smaller element and increment the index
        } else {
            result.push(right[j++]);
        }
    }
    result.push(...left.slice(i));
    result.push(...right.slice(j));
    return result;

}