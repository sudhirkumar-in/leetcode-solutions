function isValid(s: string): boolean {
    const stack = [];
    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    }
    for (const ch of s) {
        if (stack.length > 0) {
            const topCh = stack.at(-1);
            const inMap = map[topCh]
            if (ch == inMap) {
                stack.pop();
            } else {
                stack.push(ch);
            }

        } else {
            stack.push(ch);
        }
    }
    return !stack.length
};