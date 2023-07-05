function checkIfSame(number){
    let numberAsString = String(number);
    let isSame = true;
    let sum = 0;
    for(let digit of numberAsString){
        digit = Number(digit);
        sum += digit;
    }
    for (let index = 1; index < numberAsString.length; index++) {
        if(numberAsString[index] !== numberAsString[index - 1]){
            isSame = false;
        }
    }
    console.log(isSame);
    console.log(sum)
}