function sumOfMultiples(n: number): number {
    let sum = 0

    for (let i = 1; i <= n; i++) {
        let e = i
        let divi =
            e % 3 === 0 ||
            e % 5 === 0 ||
            e % 7 === 0
        if (divi) {
            sum += e
        }
    }

    return sum
};
