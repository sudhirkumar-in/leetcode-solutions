function threeFibonacciSum(n: number): boolean {
    let f = 0;
    let s = 1;
    let t = f + s;
    while ((f + s + t) <= n) {
        // console.log({ f, s, t })
        if ((f + s + t) == n) {
            return true
        }
        [f, s, t] = [s, t, s + t]

    }
    return false
};