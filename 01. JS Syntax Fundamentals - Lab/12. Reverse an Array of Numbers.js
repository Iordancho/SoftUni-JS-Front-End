function solve(n, array){
    let arr = [];
    for(let i=0; i<n; i++){
        arr.push(array[i])
    }
    arr.reverse();
    console.log(arr.join(' '))
}