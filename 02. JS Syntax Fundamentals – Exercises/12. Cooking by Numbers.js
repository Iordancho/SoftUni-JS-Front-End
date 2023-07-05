function numberOperations(number, ...operators){
    number = Number(number);

    for (let index = 0; index < operators.length; index++) {
        let command = operators[index];
        if(command === "chop"){
            number /= 2;
            console.log(number);
        } else if(command == "dice"){
            number = Math.sqrt(number);
            console.log(number);
        } else if(command == "spice"){
            number += 1;
            console.log(number);
        } else if(command == "bake"){
            number *= 3;
            console.log(number);
        } else if(command == "fillet"){
            number -= number*0.2;
            console.log(number);
        }
        
    }
}
