const areaOfRect = (x1, y1, x2, y2) => {
    let l = x2 - x1
    let b = y2 - y1

    if (l < 0) return 0
    if (b < 0) return 0

    // let cl = console.log
    // cl({ x1, y1, x2, y2, n, d, s })
    return l * b
}

function isRectangleOverlap(rec1: number[], rec2: number[]): boolean {
    let ax1, ay1, ax2, ay2;
    let bx1, by1, bx2, by2;

    [ax1, ay1, ax2, ay2] = rec1;
    [bx1, by1, bx2, by2] = rec2;

    // if (ax1 > bx1) {
    //     let a, b, c, d;
    //     [a, b, c, d] = [ax1, ay1, ax2, ay2];
    //     [ax1, ay1, ax2, ay2] = [bx1, by1, bx2, by2];
    //     [bx1, by1, bx2, by2] = [a, b, c, d];
    // }

    // let aRectArea = areaOfRect(ax1, ay1, ax2, ay2)
    // let bRectArea = areaOfRect(bx1, by1, bx2, by2)
    // cl({ aRectArea, bRectArea })

    let lbx, lby, trx, try1;
    [lbx, lby] = [Math.max(ax1, bx1), Math.max(ay1, by1)];
    [trx, try1] = [Math.min(ax2, bx2), Math.min(ay2, by2)];
    let commonRectArea = areaOfRect(lbx, lby, trx, try1);
    // cl({ lbx, lby, trx, try1, commonRectArea })

    return commonRectArea > 0
    // return aRectArea + bRectArea - commonRectArea
};
