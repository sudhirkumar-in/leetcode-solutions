function numberOfPairs(nums1: number[], nums2: number[], k: number): number {
    let goodPair = 0;
    let num1Len = nums1.length;

    let num2Len = nums2.length;

    for (let i = 0; i < num1Len; i++) {
        for (let j = 0; j < num2Len; j++) {
            let n1val = nums1[i];
            let n2val = nums2[j];
            let n2Scale = n2val * k;
            // check good pair
            if (n1val % n2Scale == 0) {
                goodPair += 1;
            }

        }
    }
    return goodPair;
};