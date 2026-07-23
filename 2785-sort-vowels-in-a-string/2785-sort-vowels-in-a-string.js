/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function (s) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])
    const vowelArr = []
    const sArr = []
    for (const ch of s) {
        if (vowels.has(ch)) {
            vowelArr.push(ch);
        }
        sArr.push(ch);
    }
    vowelArr.sort();
    let vI = 0;
    for (let i = 0; i < sArr.length; i++) {
        if (vowels.has(sArr[i])) {
            sArr[i] = vowelArr[vI++];
        }
    }
    return sArr.join('');
};