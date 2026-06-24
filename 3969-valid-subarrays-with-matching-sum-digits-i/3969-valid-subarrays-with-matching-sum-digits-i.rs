impl Solution {
    pub fn count_valid_subarrays(nums: Vec<i32>, x: i32) -> i32 {

        let mut count = 0;
        let length = nums.len();

        // prefix sum
        let mut prefix = vec![0u64; length + 1];

        for i in 0..length {
            prefix[i + 1] = prefix[i] + nums[i] as u64;
        }

        for i in 0..length {
            for j in i + 1..=length {
                let is_valid = check_sub(i, j, &prefix, x);

                if is_valid {
                    count += 1;
                }
            }
        }

        count
    }
}


fn check_sub(
    s_ind: usize,
    l_ind: usize,
    prefix: &[u64],
    target: i32
) -> bool {

    let total = prefix[l_ind] - prefix[s_ind];

    let last_digit = total % 10;

    if last_digit != target as u64 {
        return false;
    }

    let first_digit = get_first_digit(total);

    first_digit == target as u64
}


fn get_first_digit(n: u64) -> u64 {
    let mut num = n;

    while num >= 10 {
        num /= 10;
    }

    num
}