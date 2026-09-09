/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
    const vis = new Set([0]);
    const stack = [0];

    while (stack.length) {
        const room = stack.pop();

        for (const key of rooms[room]) {
            if (!vis.has(key)) {
                vis.add(key);
                stack.push(key);
            }
        }
    }

    return vis.size === rooms.length;
};
