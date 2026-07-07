function missingMultiple(nums: number[], k: number): number {
    const mulOfK = [];
    for (const num of nums) {
        if (num % k == 0) {
            const ind = num / k
            mulOfK[ind] = ind;
        }
    }

    const len = mulOfK.length
    for (let i = 1; i < len; i++) {
        if (mulOfK[i] == undefined) {
            return k * i;
        }
    }
    return len ? k * len : k;
};