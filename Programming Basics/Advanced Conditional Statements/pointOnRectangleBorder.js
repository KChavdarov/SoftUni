function pointOnRectangleBorder (x1,y1,x2,y2,x,y){
    x1 = Number(x1);
    y1 = Number(y1);
    x2 = Number(x2);
    y2 = Number(y2);
    x = Number(x);
    y = Number(y);
    let isTopBorderTouched = (y === y1) && (x >= x1 && x <=x2);
    let isBottomBorderTouched = (y === y2) && (x >= x1 && x <=x2);
    let isLeftBorderTouched = (x === x1) && (y >= y1 && y <=y2);
    let isRightBorderTouched = (x === x2) && (y >= y1 && y <=y2);

    if ((isTopBorderTouched || isBottomBorderTouched) || (isLeftBorderTouched || isRightBorderTouched)){
        console.log("Border");
    } else {
        console.log("Inside / Outside");
    }
}