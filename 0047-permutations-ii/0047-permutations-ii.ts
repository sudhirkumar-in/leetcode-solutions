function permuteUnique(
    a: number[]
): number[][] {
    let n = a.length
    let vis = new Array(n).fill(false)
    let res = []
    let indexesMap = {}

    function bt(branch) {
        if (branch.length === n) {
            res.push(branch.map(i => a[i]))
            return
        }

        for (let i = 0; i < n; i++) {
            if (vis[i]) continue
            if (
                (a[i] in indexesMap) &&
                (indexesMap[a[i]].at(-1) > i)
            ) {
                continue
            }
            indexesMap[a[i]] = indexesMap[a[i]] ?? []
            indexesMap[a[i]].push(i)
            // if (a[i - 1] === a[i] && !vis[i - 1]) continue

            branch.push(i)
            vis[i] = true
            bt(branch)
            branch.pop()
            vis[i] = false

            indexesMap[a[i]].pop()
        }
    }

    bt([])

    return res
};

function permuteUnique22222222(
    a: number[]
): number[][] {
    let n = a.length
    let vis = new Array(n).fill(false)
    let res = []

    a.sort((a, b) => a - b)

    function bt(branch) {
        if (branch.length === n) {
            res.push(branch.map(i => a[i]))
            return
        }

        for (let i = 0; i < n; i++) {
            if (vis[i]) continue
            if (a[i - 1] === a[i] && !vis[i - 1]) continue

            branch.push(i)
            vis[i] = true
            bt(branch)
            branch.pop()
            vis[i] = false
        }
    }

    bt([])

    return res
};
