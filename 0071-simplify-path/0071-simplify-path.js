/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
    const nameOfDir = "...";
    const cur = ".";
    const parent = "..";

    const top = (stack) => stack.at(-1);
    const pathArr = path.split('/').filter(String);
    const stack = []
    for (const file of pathArr) {
        if (file == parent) {
            stack.pop();
        } else if (file == cur) {
            continue;
        } else {
            stack.push(file);
        }
    }

    return '/' + stack.join('/');
};