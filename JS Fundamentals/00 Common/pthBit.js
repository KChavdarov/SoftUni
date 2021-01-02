function pthBit(num, p) {
    num = num >> p;
    let bit = num & 1;
    console.log(bit);
}
pthBit(2145, 5);
pthBit(111, 8);