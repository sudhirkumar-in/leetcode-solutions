/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    let first = 0;
    let last = s.length - 1;
    let arr = s.split('');
    for (; first < last;) {
        if (isVowel(arr[first])) {
            if (isVowel(arr[last])) {
                // swap
                let temp = arr[last];
                arr[last] = arr[first];
                arr[first] = temp;
                first++;
                last--;
            } else {
                last--;
            }
        } else {
            first++;
        }
    }
    return arr.join('');
};
const vowels = new Set('aeiouAEIOU');

function isVowel(ch) {
    return vowels.has(ch)
}