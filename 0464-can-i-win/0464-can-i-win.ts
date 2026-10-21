const cl = console.log

function canIWin(
    maxn: number, target: number
): boolean {
    let taken = 0

    if (target <= 0) return true;

    const totalSum = (maxn * (maxn + 1)) / 2;
    if (totalSum < target) return false;

    let dp = Array.from({ length: target + maxn + 1 })

    function rec(player, tot, spaces) {
        let key = taken
        // cl({ tot, key, aaa: dp })

        if (dp[key] !== undefined) return dp[key] ?? false

        for (let i = 1; i <= maxn; i++) {
            if (taken & (1 << i)) continue;

            taken |= 1 << i
            let ntot = tot + i
            // cl(" ".repeat(spaces), { player, i, ntot, }) // taken })

            if (ntot >= target) {
                // win
                taken ^= 1 << i

                // cl(" ".repeat(spaces), "i won")
                dp[key] = true
                return true
            }

            if (rec(player === 1 ? 2 : 1, ntot, spaces + 2)) {
                // other player won
                // this player wont take i
                // cl(" ".repeat(spaces), "other won")
                taken ^= 1 << i
            } else {
                // other player lost
                // this player will take i
                taken ^= 1 << i
                // cl(" ".repeat(spaces), "other lost")
                dp[key] = true
                return true
            }
        }

        // cl(" ".repeat(spaces), "i lost!! ")
        dp[key] = false
        return false
    }

    return rec(1, 0, 0) as boolean ?? false
}

