function triBitSwitch(num, p) {
    let mask = 7 << p;
    num = num ^ mask;
    console.log(num);
}
triBitSwitch(1234, 7);