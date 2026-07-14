var compress = function (chars) {
    chars.push('')
    let n = chars.length

    let ch = ''
    let ct = 0
    let res = []
    for (let i = 0; i < n; i++) {
        if (chars[i] !== chars[i - 1]) {
            if (ct) {
                res.push(ch)
                if (ct > 1) {
                    for (let e of ('' + ct)) {
                        res.push(e)
                    }
                }
            }

            ch = chars[i]
            ct = 1
        } else {
            ct++
        }
    }

    let i = 0
    for (let e of res) {
        chars[i] = e
        i++
    }
    return res.length
};
