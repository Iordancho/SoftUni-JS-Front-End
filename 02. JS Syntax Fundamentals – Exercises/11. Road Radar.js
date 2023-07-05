function checkSpeeding(speed, area){
    let speedLimits = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20,
    };

    let currSpeed = speedLimits[area] - speed;
    let status;
    if(currSpeed >= 0){
        console.log(`Driving ${speed} km/h in a ${speedLimits[area]} zone`)
    } else {
        currSpeed = Math.abs(currSpeed);
        if(currSpeed <= 20){
            status = "speeding";
        } else if(currSpeed > 20 && currSpeed <= 40){
            status = "excessive speeding";
        } else if(currSpeed > 40){
            status = "reckless driving"
        }
        console.log(`The speed is ${currSpeed} km/h faster than the allowed speed of ${speedLimits[area]} - ${status}`)
    }
}