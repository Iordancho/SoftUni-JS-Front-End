function vacationPriceCalc(groupCount, groupType, day){
    let totalPrice = 0;

    if(groupType === "Students"){
        if(day === "Friday"){
            totalPrice = groupCount * 8.45;
        } else if(day === "Saturday"){
            totalPrice = groupCount * 9.8;
        } else if(day === "Sunday"){
            totalPrice = groupCount * 10.46;
        }
        if(groupCount >= 30){
            totalPrice -= totalPrice * 0.15;
        }
    } else if(groupType === "Business"){
        if(groupCount >= 100){
            groupCount -= 10;
        }
        if(day === "Friday"){
            totalPrice = groupCount * 10.9;
        } else if(day === "Saturday"){
            totalPrice = groupCount * 15.6;
        } else if(day === "Sunday"){
            totalPrice = groupCount * 16;
        }
    } else if(groupType === "Regular"){
        if(day === "Friday"){
            totalPrice = groupCount * 15;
        } else if(day === "Saturday"){
            totalPrice = groupCount * 20;
        } else if(day === "Sunday"){
            totalPrice = groupCount * 22.5;
        }
        if(groupCount >= 10 && groupCount <= 20){
            totalPrice -= totalPrice * 0.05;
        }
    }


    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}