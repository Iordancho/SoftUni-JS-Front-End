function solve(input) {
    const result = input.reduce((acc, curr) =>{
        acc[curr] = curr.length;
        return acc;
    }, {});
    for (const [key, value] of Object.entries(result)) {
        console.log(`Name: ${key} -- Personal Number: ${value}`);
      }
}