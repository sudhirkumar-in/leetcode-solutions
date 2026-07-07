function subtractProductAndSum(n: number): number {
    let sum = 0;
    let product = 1;
    let num = n;
    while (num > 0) {
        let digit = num % 10;
        num = Math.trunc(num / 10);
        sum += digit;
        product *= digit;
    }
    return product - sum;
};