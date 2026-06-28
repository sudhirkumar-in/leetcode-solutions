/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    // let st = new Stack();
    let min = Math.pow(2,31);
    let max = min - 1 ;
    min *=-1 ;

  

    let sign = x > 0 ? 1 : -1;
    x = Math.abs(x);
    let res = 0;
    while(x>0){
        let digit = x % 10;
         res *=10 ;
         res +=digit ;
        // st.push(digit);
        x /=10;
        x = Math.trunc(x);
    }
    // let res = st.toArray();
    // console.log(st)
    if (res < min || res > max) {
        return 0;
    }
    return res*sign
};