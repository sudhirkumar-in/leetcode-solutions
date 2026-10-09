function doesAliceWin(s: string): boolean {
    let vc = 0

    for (let e of s) {
        if ('aeiou'.includes(e)) {
            vc++
        }
    }

    // 0 vc    => Alice cannot take
    // odd vc  => Alice will take full string  => Bob cannot take, nothing is left
    // even vc => Alice will leave 1 vowel     => Bob cannot take, odd vowels left

    return vc ? true : false
};
