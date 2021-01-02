function radioCrystals(array) {
    let target = array[0];

    for (let i = 1; i < array.length; i++) {
        let crystal = array[i];
        let cutCount = 0;
        let lapCount = 0;
        let grindCount = 0;
        let etchCount = 0;
        console.log(`Processing chunk ${crystal} microns`);

        while (crystal > target) {
            if (cut(crystal) >= target - 1) {
                while (cut(crystal) >= target - 1) {
                    crystal = cut(crystal);
                    cutCount++;
                }
                console.log(`Cut x${cutCount}`);
                crystal = transportAndWash(crystal);
                console.log('Transporting and washing');
            }
            if (lap(crystal) >= target - 1) {
                while (lap(crystal) >= target - 1) {
                    crystal = lap(crystal);
                    lapCount++;
                }
                console.log(`Lap x${lapCount}`);
                crystal = transportAndWash(crystal);
                console.log('Transporting and washing');
            }
            if (grind(crystal) >= target - 1) {
                while (grind(crystal) >= target - 1) {
                    crystal = grind(crystal);
                    grindCount++;
                }
                console.log(`Grind x${grindCount}`);
                crystal = transportAndWash(crystal);
                console.log('Transporting and washing');
            }
            if (etch(crystal) >= target - 1) {
                while (etch(crystal) >= target - 1) {
                    crystal = etch(crystal);
                    etchCount++;
                }
                console.log(`Etch x${etchCount}`);
                crystal = transportAndWash(crystal);
                console.log('Transporting and washing');
            }
        }
        if (crystal + 1 == target) {
            crystal = xRay(crystal);
            console.log('X-ray x1');
        }
        console.log(`Finished crystal ${crystal} microns`);
    }

    function cut(number) {
        return number / 4;
    }

    function lap(number) {
        return number * 0.8;
    }

    function grind(number) {
        return number - 20;
    }

    function etch(number) {
        return number - 2;
    }

    function xRay(number) {
        return number + 1;
    }

    function transportAndWash(number) {
        return Math.floor(number);
    }
}

radioCrystals([98, 211]);