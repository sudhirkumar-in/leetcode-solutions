function sumGame(s: string): boolean {
    let n = s.length
    let s1 = 0
    let s2 = 0
    let q1 = 0
    let q2 = 0

    let i = 0
    for (let ch of s) {
        if (i < n / 2) {
            // first half
            if (ch === '?') {
                q1++
            } else {
                s1 += +ch

            }
        } else {
            // second half
            if (ch === '?') {
                q2++
            } else {
                s2 += +ch
            }
        }
        i++
    }

    let diff = s1 - s2
    if (diff < 0) {
        diff *= -1;
        [q2, q1] = [q1, q2];
    }

    // let cl = console.log
    // cl({ s1, s2, diff })
    // cl({ q1, q2, qdiff: q1 - q2 })


    if (diff > 0) {
        // left is more
        if (q1 > q2) {
            // put 9s on left,   left can match with 0
            // left is always be more
            return true
        } else if (q1 === q2) {
            // put 9s on left,   right can match with 9
            // left is always be more
            return true
        } else {
            // q1 < q2
            // if (diff === 9 && ((q2 - q1) % 2 === 0)) {
            if (diff === (((q2 - q1) / 2) * 9)) {
                return false
            } else {
                return true
            }
        }
    } else {
        if (q1 > q2) {
            return true
        } else if (q1 === q2) {
            return false
        } else {
            return true
        }
    }
};
