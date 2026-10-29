/**
 * @param {string} time
 * @return {string}
 */
var maximumTime = function (time) {
    let ts = time.split(":");
    let h = ts[0].split('');
    let m = ts[1].split('');



    if (m[0] == '?') {
        m[0] = '5';
    }
    if (m[1] == '?') {
        m[1] = '9'
    }
    if (h[0] == '?') {
        if (+h[1] >= +'4') {
            h[0] = '1';
        } else {
            h[0] = '2';
        }
    }
    if (h[1] == '?') {
        if (h[0] != '2') { h[1] = '9' } else { h[1] = '3' }
    }
    return h.join('') + ':' + m.join('')
};