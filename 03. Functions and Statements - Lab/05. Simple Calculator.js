let colculator = {
    multiply: (x, y) => x * y,
    divide: (x, y) => x / y,
    add: (x, y) => x + y,
    subtract: (x, y) => x - y,
};

function calculate(x, y, operator){
    console.log(colculator[operator](x, y));
}
