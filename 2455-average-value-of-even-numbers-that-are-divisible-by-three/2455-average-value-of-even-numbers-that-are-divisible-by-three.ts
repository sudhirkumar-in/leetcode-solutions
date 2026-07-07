function averageValue(nums: number[]): number {
    let sum = 0;
    let count = 0;
    for (const num of nums) {
        if (num % 6 == 0) {
            sum += num;
            count += 1;
        }
    }
    return sum > 0 ? Math.trunc((sum / count)) : 0;
};