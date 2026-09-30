function getMinSwaps(num: string, k: number): number {
    let nums = num.split("").map(x => +x)
    let a = [...nums]

    while (k--) {
        nextPermutation(nums)
    }

    let b = [...nums]
    let swaps = 0

    for (let i = 0; i < b.length; i++) {
        let e = b[i]
        let j = a.indexOf(e, i)

        while (b[i] !== a[i]) {
            [a[j], a[j - 1]] = [a[j - 1], a[j]]
            j--
            swaps++
        }
    }

    return swaps
};

function nextPermutation(nums) {
    let swaps = 0
    let pivot = nums.length - 2;

    while (pivot >= 0 && nums[pivot] >= nums[pivot + 1]) {
        pivot--;
    }

    if (pivot >= 0) {
        let successor = nums.length - 1;

        while (nums[successor] <= nums[pivot]) {
            successor--;
        }

        [nums[pivot], nums[successor]] = [nums[successor], nums[pivot]];

        swaps += (successor - pivot) * 2 + 1
    }

    let left = pivot + 1;
    let right = nums.length - 1;
    swaps += (right - left) * 2 + 1

    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];

        left++;
        right--;
    }

    return swaps
}
