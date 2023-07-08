function factDivision(num1, num2){
    let firstSum = 1;
    let secondSum = 1;
    for (let index = num1; index > 0; index--) {
        firstSum *= index ;
    }
    for (let index = num2; index > 0; index--) {
        secondSum *= index ;
    }
    let result = firstSum / secondSum;
    console.log(result.toFixed(2))
}