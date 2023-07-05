function printSum(start, end){
    let sum = 0;
    let array = [];
    for (let index = start; index <= end; index++) {
        sum += index;
        array.push(index);
    }
    console.log(array.join(' '))
    console.log(`Sum: ${sum}`);
}