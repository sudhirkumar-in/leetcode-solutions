var minimumAbsDifference = function (a) {
    // sort to get min diff
    a.sort((a, b) => a - b);

    // loop to  find  min abs diff
    // loop to  collect pairs  with  diff = min abs diff
    let res = [];
    let min = Infinity;

    for (let i = 1; i < a.length; i++) {
        let prev = a[i - 1]
        let curr = a[i]
        let diff = curr - prev

        if (diff < min) {
            res = [[prev, curr]]
            min = diff
        } else if (diff === min) {
            res.push([prev, curr]);
        }
    }

    return res;
};
