/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function (target, n) {
    let stream = 1;
    let res = []
    for (const val of target) {
        while (val != stream) {
            res.push("Push")
            res.push("Pop")
             stream++;
        }
        res.push("Push")

        stream++;
    }
    return res
};