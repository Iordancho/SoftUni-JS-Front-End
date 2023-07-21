function solve(input) {
    
    let countetArr = input.split(' ').reduce((acc, curr) => {
        let newCurr = curr.toLowerCase();
        if(!acc.hasOwnProperty(newCurr)){
            acc[newCurr] = 0;
        }
        acc[newCurr] += 1;
        return acc;
    }, {})
    let result = [];
    Object.entries(countetArr).forEach(([key, value]) => {
        if(value % 2 === 1){
            result.push(key);
        }
    })
    console.log(result.join(' '))
}
