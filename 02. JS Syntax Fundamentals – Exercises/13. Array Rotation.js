function arrayRotation(array, numOfRotations){
    for (let index = 0; index < numOfRotations; index++) {
        let currNumber = array.shift();
        array.push(currNumber);
    }
    console.log(array.join(' '))
}