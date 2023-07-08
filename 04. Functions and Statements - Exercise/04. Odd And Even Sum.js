function sums(number){
    let oddSum = 0;
    let evenSum = 0;
    number = number.toString();
    let numberLength = number.length;
    for (let index = 0; index < numberLength; index++) {
        let currNumber = Number(number[index]);
        if( currNumber % 2 === 0){
            evenSum += currNumber;
        } else{
            oddSum += currNumber;
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}