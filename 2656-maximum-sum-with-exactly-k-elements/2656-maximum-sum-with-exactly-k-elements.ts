const sum = (n) => n * (n + 1) / 2

function maximizeSum(
    a: number[], k: number
): number {
    let max = Math.max(...a)

    let l = max - 1
    let r = max + k - 1

    return sum(r) - sum(l)
};
