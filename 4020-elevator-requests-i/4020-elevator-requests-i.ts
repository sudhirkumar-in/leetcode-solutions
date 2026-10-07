function elevatorRequests(n: number, a: number[]): number {
    let res = 0
    let from = 0

    for (let e of a) {
        res += Math.abs(e - from)
        from = e
    }

    return res
};
