function arraySign(nums: number[]): number {
    let sign = 1;
    for (const num of nums) {
        sign *= Math.sign(num);
        if (sign == 0) {
            return 0;
        }
    }
    return sign;
};