function danceHall (l,w,a){
    let length = Number(l) * 100;
    let width = Number(w) * 100;
    let side = Number(a) * 100;

    let hallArea = length * width;
    let wardrobeArea = Math.pow(side,2);
    let benchArea = hallArea / 10;
    let dancer = 7000 + 40;

    let maxDancerCount = Math.floor((hallArea - wardrobeArea - benchArea) / dancer);
    console.log (maxDancerCount);
}

danceHall (50, 25, 2);