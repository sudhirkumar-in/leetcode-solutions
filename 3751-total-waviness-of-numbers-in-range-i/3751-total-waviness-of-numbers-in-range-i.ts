let memo = getWaviness()

function totalWaviness(
    num1: number,
    num2: number
): number {
    let total = 0

    for (let i = num1; i <= num2; i++) {
        let sum = memo.get(i)
        total += sum
    }

    return total
};

function getWaviness() {
    let memo = new Map()

    for (let n = 0; n <= 100000; n++) {
        let s = '' + n
        let sum = 0

        for (let i = 0; i < s.length; i++) {
            if (s[i - 1] < s[i] && s[i] > s[i + 1]) {
                // peak
                sum++
            } else if (s[i - 1] > s[i] && s[i] < s[i + 1]) {
                // valley
                sum++
            }
        }

        memo.set(n, sum)
    }

    return memo
}
