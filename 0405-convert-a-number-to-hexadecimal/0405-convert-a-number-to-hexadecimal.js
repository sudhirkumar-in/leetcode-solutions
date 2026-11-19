// 23 in decimal
//   0b00010111 in binary       (base-2)    //  0001 0111
//   0o027      in octal        (base-8)    // 00 010 111
//   0x17       in hexadecimal  (base-16)   //     1   7

// return n.toStri ng(16)

var toHex = function (n) {
    //           0123456789 10 11 12 13 14 15
    const hex = "0123456789abcdef";

    if (n === 0) {
        return "0";
    }

    if (n < 0) {
        n += 2 ** 32;         // n = n >>> 0
    }

    let res = "";

    while (n > 0) {
        let last4Bits = n & 15 // n & 0b1111
        res = hex[last4Bits] + res;
        n >>>= 4; // remove last 4 bits
    }

    return res ?? 0;
};
