function jump(a: number[]): number {
    let n = a.length
    let target = n - 1
    let jumps = 0

    while (target) {
        jumps++
        let goodi = target - 1

        for (let i = target - 1; i >= 0; i--) {
            if (i + a[i] >= target) {
                goodi = i
            }
        }

        target = goodi
    }

    return jumps
};

function jump222222222222(a: number[]): number {
    let n = a.length
    let minJumpCount = Infinity

    // let cl = console.log

    // let memo = Array.from(
    //     { length: 10 ** 4 + 1 },
    //     () => {}
    // )

    function rec(i, jumps) {

        if (jumps >= minJumpCount) {
            return
        }

        if (i === n - 1) {
            // cl("found after ", { jumps, i })
            minJumpCount = Math.min(minJumpCount, jumps)
            return
        }

        // cl("after ", { jumps, i })

        let v = a[i]

        for (let j = v; j >= 1; j--) {
            rec(i + j, jumps + 1)
        }
    }

    rec(0, 0)

    if (minJumpCount === Infinity) return -1

    return minJumpCount
};
