function makeSmallestPalindrome(s: string): string {
    let a = s.split("")

    for (let i = 0, j = a.length - 1; i < j; i++, j--) {
        if (a[i] < a[j]) {
            a[j] = a[i]
        } else if (a[i] > a[j]) {
            a[i] = a[j]
        }
    }

    return a.join("")
};
