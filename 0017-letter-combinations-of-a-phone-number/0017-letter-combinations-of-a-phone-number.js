/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {

    const map = {
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz"
    };

    const res = [];

    function bt(index, path) {

        // 🎉 finished all digits
        if (path.length === digits.length) {
            res.push(path);
            return;
        }

        // What letters does the current digit give us?
        const letters = map[digits[index]];

        // Try each letter
        for (const letter of letters) {

            // choose + explore
            bt(index + 1, path + letter);
        }
    }

    bt(0, "");

    return res;
};