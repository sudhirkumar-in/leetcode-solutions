function minMaxDifference(num: number): number {
    let s = '' + num
    let makeItMaxChar = ''

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '9') {
        } else {
            makeItMaxChar = s[i]
            break
        }
    }

    let maxs = s;
    if (makeItMaxChar) {
        maxs = s.replaceAll(makeItMaxChar, '9')
    }

    let mins = s.replaceAll(s[0], '0')

    return +maxs - +mins
};
