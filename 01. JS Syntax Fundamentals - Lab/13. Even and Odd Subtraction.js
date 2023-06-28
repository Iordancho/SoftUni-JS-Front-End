function solve(arr){
    for(let i=0; i<arr.length; i++){
        arr[i]=Number(arr[i]);
    }
    let even;
    let odd;
    for(let i=0; i<arr.length; i++){
        if(arr[i] % 2 == 0){
            even = even + arr[i];
        }
        else{
            odd = odd + arr[i];
        }
    }
    console.log(even - odd);
}
solve([1,2,3,4,5,6] );