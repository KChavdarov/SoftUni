function fishTank (arg1, arg2, arg3 ,arg4) {
    let l = Number(arg1);
    let h = Number(arg2);
    let w = Number(arg3);
    let percentage = Number(arg4);
    percentage = (percentage * 0.01);
    let volume = (l * h * w);
    volume = (volume * 0.001);
    let water = (volume - volume * percentage).toFixed(3);
    console.log(water);
}

fishTank("85","75","47","17");