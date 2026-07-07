function sumAndMultiply(n: number): number {
    if (n == 0) {
        return 0;
    }
    let xStr = '';
    let sum = 0;
    while (n > 0) {
        let digit = n % 10;
        n = Math.trunc(n / 10);
        if (digit != 0) {
            sum += digit;
            xStr = digit + xStr;
        }
    }

    return sum * Number(xStr);
};