function maximumUnits(aa: number[][], maxnb: number): number {
    let units = 0

    aa.sort((a, b) => b[1] - a[1])

    while (maxnb && aa.length) {
        let [nb, ni] = aa.shift()

        if (nb <= maxnb) {
            units += nb * ni
            maxnb -= nb
        } else {
            units += maxnb * ni
            maxnb = 0
        }
    }

    return units
};
