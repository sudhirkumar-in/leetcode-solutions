function strWithout3a3b(a: number, b: number): string {
    let res = [];
    let found = false;
    function bt(path, aCount, bCount) {
        if (found) return;
        if (aCount === a && bCount === b) {
            res = [...path];
            found = true
            return
        }

        if (path.at(-1) === 'a' && path.at(-2) === 'a') {
            if (bCount < b) {

                path.push('b')
                bt(path, aCount, bCount + 1);
                path.pop()
            }
        }
        else if (path.at(-1) === 'b' && path.at(-2) === 'b') {
            if (aCount < a) {

                path.push('a')
                bt(path, aCount + 1, bCount);
                path.pop()
            }
        } else {
            if (a - aCount >= b - bCount) {
                if (aCount < a) {
                    path.push('a');
                    bt(path, aCount + 1, bCount);
                    path.pop();
                }
                if (found) return;
                if (bCount < b) {
                    path.push('b');
                    bt(path, aCount, bCount + 1);
                    path.pop();
                }
            } else {
                if (bCount < b) {
                    path.push('b');
                    bt(path, aCount, bCount + 1);
                    path.pop();
                }
                if (found) return;
                if (aCount < a) {
                    path.push('a');
                    bt(path, aCount + 1, bCount);
                    path.pop();
                }
            }
        }



    }
    bt([], 0, 0);
    return res.join('');
};