/**
 * @param {number[]} bulbs
 * @return {number[]}
 */
var toggleLightBulbs = function (bulbs) {
    let state = new Map();
    // k num , value = on/off
    const minPriority = new MinPriorityQueue();
    for (const light of bulbs) {
        if (state.has(light)) {
            state.set(light, !state.get(light)); // swap
        } else {
            state.set(light, true); // switch on
        }
    }
    console.log(state)
    for (const [value, isOn] of state) {
        if (isOn === true) {
            minPriority.enqueue(value);
        }
    }
    return [...minPriority];
};