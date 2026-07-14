/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
    // edge
    if (nums.length == 0) return nums;
    if (nums.length == 1) return ["" + nums[0]];

    let ranges = [];
    let howMany = 0;
    let now = null;
    let prev = null;
    for (let i = 1; i < nums.length; i++) {
        now = nums[i];
        prev = nums[i - 1];

        if (now == prev + 1) {
            howMany += 1;
            continue;
        }
        else {
            if (howMany == 0) {
                ranges.push(`${prev}`)
            } else {
                ranges.push(`${prev - howMany}->${prev}`)
            }
            // reset howMany
            howMany = 0;
        }

    }
    if (howMany == 0) {
        ranges.push(`${now}`)
    } else {
        ranges.push(`${now - howMany}->${now}`)
    }
    return ranges;
};