function bitAtIndexOne(num) {
    num = num >> 1;
    let bit = num & 1;
    console.log(bit);
}
bitAtIndexOne(13);