function checkIfPalindrome(arrayNum){
    let isPalindrome = false;
    for (let index = 0; index < arrayNum.length; index++) {
        var numString = arrayNum[index].toString();
        isPalindrome = numString.split("").reverse().join("") == numString;
        console.log(isPalindrome);
    }
}