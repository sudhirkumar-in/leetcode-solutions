var hasMatch = function (s, p) {
    let [first, second] = p.split("*")

    let i = s.indexOf(first)
    if (first && i === -1) return false

    let j = s.lastIndexOf(second)
    if (second && j === -1) return false

    //      abcdef
    //      abc*def
    // first=abc   second=def   no overlap
    return i + first.length <= j
};
