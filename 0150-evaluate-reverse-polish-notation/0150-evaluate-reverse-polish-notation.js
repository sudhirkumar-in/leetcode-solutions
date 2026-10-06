/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    const op = new Set(["+", "-", "*", "/"]);
    const stack = [];
    for (const token of tokens) {
        if (op.has(token)) {
            // 
            const val1 = stack.pop();
            const val2 = stack.pop();
            const result = cal(+val2, +val1, token);
            console.log({ val1, val2, result })
            stack.push(result);

        } else {
            stack.push(token);
        }
    }
    return +stack.pop()
};
function cal(a, b, op) {
    if (op === '+') {
        return a + b;
    } else if (op === '-') {
        return a - b;
    } else if (op === '*') {
        return a * b;
    } else {
        return Math.trunc(a / b);
    }
}