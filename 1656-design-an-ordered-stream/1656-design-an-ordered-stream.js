class OrderedStream {
    o = {}
    start = 1

    insert(k, v) {
        let { o } = this
        o[k] = v

        if (k !== this.start) {
            return []
        }

        let res = []

        while (this.start in o) {
            res.push(o[this.start])
            this.start++
        }

        return res
    };
};
