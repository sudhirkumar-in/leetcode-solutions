var minPartitions = function (n) {
    let s = ('' + n)
    let a = s.split("").map(ch => +ch)

    return Math.max(...a)
};
