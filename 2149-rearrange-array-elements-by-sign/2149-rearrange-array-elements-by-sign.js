var rearrangeArray = function (a) {
    let res = [];

    let positives = a.filter(x => x > 0);
    let negatives = a.filter(x => x < 0);

    for (let i = 0; i < positives.length; i++) {
        res.push(positives[i]); // one +ve
        res.push(negatives[i]); // one -ve
    }

    return res;
};
