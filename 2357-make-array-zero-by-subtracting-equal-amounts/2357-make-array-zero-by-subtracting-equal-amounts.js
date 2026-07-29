/*
class MinHeap1 {
    a;
    p(i) => Math.trunc((i-1)/2)
    l(i) => 2*i+1
    l(i) => 2*i+2
    findMin() { return a[0] }
    insert(e){a.push(e); heapifyUp()}
    deleteMin() { a[0] = a[n-1]; a.pop(); heapifyDown()}
    heapifyUp(i=a.length-1) {
       while (i>0 &&  a[p(i)] >  a[i] ) {
           [a[p(i)] ,  a[i]] =   [ a[i], a[p(i)]]
           i = p(i)
       }
    }
    heapifyDown(i=0) {
        let mini = i
        if (l(i) < n && a[l(i)] < a[mini]) mini = l(i)
        if (r(i) < n && a[r(i)] < a[mini]) mini = r(i)
        if (i == mini) return
        if (mini === l(i)) {
            [a[l(i)] ,  a[i]] =   [ a[i], a[l(i)]]
            i = l(i)
        } else {
            [a[r(i)] ,  a[i]] =   [ a[i], a[r(i)]]
            i = r(i)
        }
        heapifyDown(i)
    }
}
*/

var minimumOperations = function (a) {
    // let pq = new PriorityQueue((a, b) => a - b)

    a = a.filter(e => e)
    return new Set(a).size
};
