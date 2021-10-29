var reverseBits = function(n) {
    let res = 0, pow = 31;
    while (n > 0) {
        let rightMost = n & 1;
        res = res + (rightMost << pow);
        pow--;
        n = n >>> 1;
    }
    // take negative into positive
    return res >>> 0;
}