var findContentChildren = function (childrenNeeds, cookieSizes) {
    childrenNeeds.sort((a, b) => a - b)
    cookieSizes.sort((a, b) => a - b)

    let satisfiedCount = 0
    let i = 0

    for (let cs of cookieSizes) {
        if (cs >= childrenNeeds[i]) {
            satisfiedCount++
            i++
        }
    }

    return satisfiedCount
}
