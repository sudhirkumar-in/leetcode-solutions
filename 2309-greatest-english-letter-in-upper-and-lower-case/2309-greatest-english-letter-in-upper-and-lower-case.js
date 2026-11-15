var greatestLetter = function (s) {
    let ALPHA_UPPER_REV = "ZYXWVUTSRQPONMLKJIHGFEDCBA"

    let set = new Set(s)

    for (let chU of ALPHA_UPPER_REV)
        if (
            set.has(chU) &&
            set.has(chU.toLowerCase())
        ) {
            return chU;
        }

    return "";
};
