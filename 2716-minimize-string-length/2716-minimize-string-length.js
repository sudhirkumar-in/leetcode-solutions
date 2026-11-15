var minimizedStringLength = function (s) {
    // for each ch
    //      repeatedly remove closest ch on right/left
    // =>  removing duplicates
    return new Set(s).size
}
