function findDisappearedNumbers(nums: number[]): number[] {
    let set = new Set(new Array(nums.length).fill(0).map((v, i) => i + 1))
    for (const num of nums) {
        set.delete(num);
    }
    return [...set]
};