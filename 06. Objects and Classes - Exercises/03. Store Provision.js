function solve(currentStock, deliverdStock) {
    const products = [...currentStock, ...deliverdStock];

    const stock = products.reduce((acc, curr, i) => {
        if(i % 2 == 0) {
            // product name
            if(!acc.hasOwnProperty(curr)) {
                acc[curr] = Number(products[i + 1]);
            } else {
                acc[curr] += Number(products[i + 1]);
            }
        } 
        return acc;

    }, {});

    Object.entries(stock).forEach(([key, value]) => {
        console.log(`${key} -> ${value}`)
    })
}

