function missingMultiple(nums: number[], k: number): number {
    const set = new Set(nums)


    let i = k;
    while (set.has(i)) {
        i += k;
    }
    return i;
};