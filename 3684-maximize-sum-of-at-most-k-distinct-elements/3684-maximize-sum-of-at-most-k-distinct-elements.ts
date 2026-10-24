function maxKDistinct(a: number[], k: number): number[] {
    let b = [... new Set(a)]

    b.sort((a, b) => b - a)
    return b.slice(0, k)
};
