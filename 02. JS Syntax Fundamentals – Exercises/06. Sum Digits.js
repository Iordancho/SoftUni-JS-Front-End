function sumDigits(number){
    let numberAsString = String(number);
    let sum = 0;
    for(let digit of numberAsString){
        digit = Number(digit);
        sum += digit;
    }
    console.log(sum)
}
sumDigits(2222222);