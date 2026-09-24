function mostProfitablePath(edges: number[][], bob: number, amount: number[]): number {
    const n = edges.length + 1;
    const g = Array.from({ length: n }, () => []);

    for (let [u, v] of edges) {
        g[u].push(v);
        g[v].push(u);
    }
    let cl = console.log

    // -------------------- Bob --------------------

    let pathOfBobTo0 = []
    let bobFound0 = false

    function dfsBob(u, par, path) {
        if (bobFound0) return

        path.push(u)

        if (u === 0) {
            bobFound0 = true
            pathOfBobTo0 = [...path]

            path.pop()
            return
        }

        for (let v of g[u]) {
            if (v === par) continue
            dfsBob(v, u, path)
        }

        path.pop()
    }

    dfsBob(bob, -1, [])

    // cl({ pathOfBobTo0 })


    // -------------------- Alice --------------------

    let maxAliceAmt = -Infinity

    function dfsAlice(u, par, totalAmtAlice, pathIndexOfBob, visitedBob) {

        if (!visitedBob.has(u)) {

            if (pathIndexOfBob < pathOfBobTo0.length) {
                let vBob = pathOfBobTo0[pathIndexOfBob]

                if (u === vBob) {
                    totalAmtAlice += (amount[u] / 2)
                } else {
                    totalAmtAlice += amount[u]
                }

            } else {
                totalAmtAlice += amount[u]
            }
        }

        if (u !== 0 && g[u].length === 1) {
            maxAliceAmt = Math.max(maxAliceAmt, totalAmtAlice)
            return
        }

        if (pathIndexOfBob < pathOfBobTo0.length) {
            let vBob = pathOfBobTo0[pathIndexOfBob]
            visitedBob.add(vBob)
        }

        for (let v of g[u]) {
            if (v === par) continue
            dfsAlice(v, u, totalAmtAlice, pathIndexOfBob + 1, visitedBob)
        }

        if (pathIndexOfBob < pathOfBobTo0.length) {
            let vBob = pathOfBobTo0[pathIndexOfBob]
            visitedBob.delete(vBob)
        }

    }

    dfsAlice(0, -1, 0, 0, new Set())

    return maxAliceAmt
};

function mostProfitablePath222(edges: number[][], bob: number, amount: number[]): number {
    const n = edges.length + 1;
    const g = Array.from({ length: n }, () => []);

    for (let [u, v] of edges) {
        g[u].push(v);
        g[v].push(u);
    }
    let cl = console.log

    // -------------------- Bob --------------------

    let pathOfBobTo0 = []
    let bobFound0 = false

    function dfsBob(u, par, path) {
        if (bobFound0) return

        path.push(u)

        if (u === 0) {
            bobFound0 = true
            pathOfBobTo0 = [...path]

            path.pop()
            return
        }

        for (let v of g[u]) {
            if (v === par) continue
            dfsBob(v, u, path)
        }

        path.pop()
    }

    dfsBob(bob, -1, [])

    // cl({ pathOfBobTo0 })


    // -------------------- Alice --------------------

    let maxAliceAmt = -Infinity

    function dfsAlice(u, par, totalAmtAlice, pathIndexOfBob, visitedBob) {

        if (!visitedBob.has(u)) {

            if (pathIndexOfBob < pathOfBobTo0.length) {
                let vBob = pathOfBobTo0[pathIndexOfBob]

                if (u === vBob) {
                    totalAmtAlice += (amount[u] / 2)
                } else {
                    totalAmtAlice += amount[u]
                }

            } else {
                totalAmtAlice += amount[u]
            }
        }

        if (u !== 0 && g[u].length === 1) {
            maxAliceAmt = Math.max(maxAliceAmt, totalAmtAlice)
            return
        }

        if (pathIndexOfBob < pathOfBobTo0.length) {
            let vBob = pathOfBobTo0[pathIndexOfBob]
            visitedBob.add(vBob)
        }

        for (let v of g[u]) {
            if (v === par) continue
            dfsAlice(v, u, totalAmtAlice, pathIndexOfBob + 1, visitedBob)
        }

        if (pathIndexOfBob < pathOfBobTo0.length) {
            let vBob = pathOfBobTo0[pathIndexOfBob]
            visitedBob.delete(vBob)
        }

    }

    dfsAlice(0, -1, 0, 0, new Set())

    return maxAliceAmt
};
