/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    const eval = (val1, val2, operator) => {
        switch (operator) {
            case "+": return val1 + val2
            case "-": return val2 - val1
            case "*": return val1 * val2
            default: return Math.trunc(val2 / val1)
        }
    }

    const stack = [];
    const setOperator = new Set(["+", "-", "*", "/"]);

    for (const token of tokens) {
        if (setOperator.has(token)) {
            const val1 = stack.pop();
            const val2 = stack.pop();
            const val = eval(+val1, +val2, token);

            stack.push(val);
            continue;
        } else {
            stack.push(token);
        }
    }

    return +stack[0];
};