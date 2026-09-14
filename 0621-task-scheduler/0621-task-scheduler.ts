let cl = console.log

function leastInterval(tasks: string[], n: number): number {
    let freq = new Map<string, number>()
    for (let t of tasks) {
        freq.set(t, (freq.get(t) ?? 0) + 1)
    }

    // max-heap of [task, remainingCount], ordered by count desc
    let pq = new PriorityQueue<[string, number]>((a, b) => b[1] - a[1])
    for (let [t, c] of freq) {
        pq.enqueue([t, c])
    }

    // tasks currently cooling down: [task, remainingCount, availableAtTime]
    let cooling: [string, number, number][] = []

    let time = 0
    while (!pq.isEmpty() || cooling.length > 0) {
        time++

        if (!pq.isEmpty()) {
            let [t, c] = pq.dequeue()
            c--
            if (c > 0) {
                cooling.push([t, c, time + n])
            }
        }
        // otherwise: pq empty but tasks still cooling -> this cycle is idle

        // bring any tasks whose cooldown has expired back into the heap
        while (cooling.length > 0 && cooling[0][2] <= time) {
            let [t, c] = cooling.shift()!
            pq.enqueue([t, c])
        }
    }

    return time
}