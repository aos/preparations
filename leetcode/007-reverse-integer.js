/*
007 Reverse Integer

Reverse digits of an integer.

Example:
x = 123, return 321
x = -123, return -321

Caveat: Assume input is a signed 32-bit integer. Function should return 0
if the reversed integer overflows.
*/

const reverse = (x) => {
    let strN = '' + x;
    let isNeg = false;
    
    if (strN[0] === '-') {
        isNeg = true;
    }
    
    let n = strN.split('').reverse();
    
    if (isNeg) {
        n.unshift('-');
    }
    
    n = parseInt(n.join(''), 10);
    
    if (n > (Math.pow(2, 31) - 1) || n < (Math.pow(-2, 31))) {
        return 0;
    }
    
    return n;
};
