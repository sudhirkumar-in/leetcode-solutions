var distanceTraveled = function (mainTankFuel, additionalTankFuel) {
    let distance = 0;

    for (let litres = 1; litres <= mainTankFuel; litres++) {
        distance += 10;
        if (litres % 5 === 0) {
            if (additionalTankFuel) {
                additionalTankFuel--;
                mainTankFuel++;
            }
        }
    }

    return distance;
};
