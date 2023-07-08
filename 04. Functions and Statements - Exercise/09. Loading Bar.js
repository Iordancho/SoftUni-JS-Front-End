function loadingBar(number){
    if(number === 100){
        console.log("100% Complete")
        return;
    }
    let result = "";
    let percent = 0;
    for (let index = 0; index < number; index+= 10) {
        percent++;
    }
    result += '%'.repeat(percent);
    let dots = '.'.repeat(10 - percent);
    result += dots;
    console.log(`${number}% [${result}]`)
    console.log("Still loading...")
}