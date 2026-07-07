function missingMultiple(nums: number[], k: number): number {
    const set = new Set()
    for (const num of nums) {
        if (num % k == 0) {
            const ind = num / k
            set.add(ind);
        }
    }

    let i = 1;
    while (set.has(i)) {
        i += 1;
    }
    return k * i;
};