function bitDestroyer(num, p) {
    let mask = ~(1 << p);
    num = num & mask;
    console.log(num);
}
bitDestroyer(231,2);