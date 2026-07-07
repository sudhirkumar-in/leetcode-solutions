function countDigits(num: number): number {
    let digitFreq = new Map();
    let count = 0;
    let n = num;
    while (n > 0) {
        let digit = n % 10;
        n = Math.trunc(n / 10);
        digitFreq.set(digit, (digitFreq.get(digit) || 0) + 1)
    }

    for (const [key, times] of digitFreq.entries()) {
        if (num % key == 0) {
            count += times
        }
    }
    return count
};