function calcPrice(product, quantity){
    const products = {
        coffee: 1.50,
        water: 1,
        coke: 1.4,
        snacks: 2,
    };
    let result = 0;
    result = products[product] * quantity;
    console.log(result.toFixed(2))
}

