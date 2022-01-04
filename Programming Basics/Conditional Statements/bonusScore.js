function bonusScore(points) {
    let baseScore = Number(points);
    let sizeBonus;
    let additionalBonus;
    if (baseScore > 1000) {
        sizeBonus = baseScore * 0.1;
    } else if (baseScore > 100) {
        sizeBonus = baseScore * 0.2;
    } else {
        sizeBonus = 5;
    }
    if (baseScore % 2 === 0) {
        additionalBonus = 1;
    } else if (baseScore % 10 === 5) {
        additionalBonus = 2;
    } else {
        additionalBonus = 0;
    }
    let totalBonus = sizeBonus + additionalBonus;
    let totalScore = baseScore + totalBonus;
    console.log(totalBonus);
    console.log(totalScore);
}
bonusScore("15875");