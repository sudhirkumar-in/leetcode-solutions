function largestNumber(nums: number[]): string {
    let val = nums.map(String).sort((a, b) => (b + a).localeCompare(a + b)).join('')

    return val[0] == "0" ? "0" : val;
};