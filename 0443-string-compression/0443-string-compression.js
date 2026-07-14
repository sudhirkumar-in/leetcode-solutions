/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
    let charsBreak = [...chars, " "];
    let compression = ''
    let count = 1;
    for (let i = 1; i < charsBreak.length; i++) {

        let current = charsBreak[i];
        let previous = charsBreak[i - 1];
        if (previous === current) {
            count += 1;
        } else {
            if (count == 1) {
                compression += previous
            } else {
                compression += previous + count;
            }

            count = 1;
        }
    }
    let i = 0;
    for (const ch of compression) {
        chars[i] = ch;
        i++;
    }
    return compression.length;
};