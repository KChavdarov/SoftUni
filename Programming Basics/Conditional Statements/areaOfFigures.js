function areaOfFirgures (fig,l1,l2,){
    let figure = fig;
    let area;
    if (figure == "square"){
        let side = Number(l1);
        area = Math.pow(side,2);
    } else if (figure == "rectangle"){
        let sideA = Number(l1);
        let sideB = Number(l2);
        area = sideA * sideB;
    } else if (figure == "circle"){
        let radius = Number(l1);
        area = Math.PI * Math.pow(radius,2);
    } else if (figure == "triangle"){
        let sideA = Number(l1);
        let height = Number(l2);
        area = (sideA * height) / 2;
    }
    console.log (area.toFixed(3));
}
areaOfFirgures("rectangle", 7, 2.5);