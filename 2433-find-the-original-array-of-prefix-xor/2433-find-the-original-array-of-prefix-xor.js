var findArray = function (pre) {
    let n = pre.length;
    let arr = [pre[0]];

    for (let i = 1; i < n; i++) {
        arr.push(pre[i - 1] ^ pre[i]);
    }

    return arr;
};
