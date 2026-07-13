/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function (low, high) {
    let lowCounter = Math.trunc(Math.log10(low)) + 1;
    let result = [];

    let i = 0;
    let lowVal = 0;
    do {
        console.log('=>', i, lowCounter)
        if ((i + lowCounter) == 10) {
            i = 0;
            lowCounter += 1
        }

        i++;
        lowVal = startTimes(i, lowCounter);
        console.log(lowVal, i, lowCounter)
        if (lowVal >= low && lowVal <= high) {
            result.push(lowVal);
        }

    } while (lowVal <= high);
    return result;

};

function startTimes(start, times) {
    let str = '';
    for (; times > 0; times--) {
        str = str + start;
        start += 1;
    }
    return Number(str);
}