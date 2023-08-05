function solve(input) {
  const groceries = input.shift().split("!");

  let tokens = input.shift();
  while (tokens !== "Go Shopping!") {
    let commands = tokens.split(' ');
    let command = commands[0];

    if(command === "Urgent"){
        const item = commands[1];
        const itemIndex = groceries.indexOf(item);

        if(groceries[itemIndex] !== item){
            groceries.unshift(item);
        }
    } else if(command === "Unnecessary"){
        const item = commands[1];
        const itemIndex = groceries.indexOf(item);

        if(groceries[itemIndex] === item){
            groceries.splice(itemIndex, 1);
        } 
    } else if(command === "Correct"){
        const oldItem = commands[1];
        const newItem = commands[2];

        const oldItemIndex = groceries.indexOf(oldItem);

        if(groceries[oldItemIndex] === oldItem){
            groceries.splice(oldItemIndex, 1, newItem);
        } 
        
    } else if(command === "Rearrange"){
        const item = commands[1];
        const itemIndex = groceries.indexOf(item);
        
        if(groceries[itemIndex] === item){
            groceries.splice(itemIndex, 1);
            groceries.push(item);
        }
    }

    tokens = input.shift();

}
console.log(groceries.join(', '))
}

solve((["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"])
);
