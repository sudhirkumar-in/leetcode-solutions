function decimalRepresentation(n: number): number[] {
    let base10 = [];
    let product = 1;
    while (n > 0) {
        let digit = n % 10;
        n = Math.trunc(n / 10);
        digit != 0 && base10.push(digit * product);
        product *= 10;
    }
    return base10.reverse();
};