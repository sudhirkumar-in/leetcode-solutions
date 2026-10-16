function getLongestSubsequence(
    words: string[], groups: number[]
): string[] {
    let res = []

    for (let i = 0; i < groups.length; i++) {
        if (groups[i - 1] !== groups[i]) {
            res.push(words[i])
        }
    }

    return res
};
