/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
    let firstUpper = word[0] === word[0].toUpperCase();
    let restUpper = word.slice(1) === word.slice(1).toUpperCase();
    let restLower = word.slice(1) === word.slice(1).toLowerCase();

    return (firstUpper && restUpper) || restLower;
};