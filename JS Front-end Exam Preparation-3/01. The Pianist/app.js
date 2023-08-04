function solve(input) {
    const numberOfPieces = input.shift();
    const initialPieces = input.slice(0, numberOfPieces);
    let pieces = initialPieces.reduce((acc, curr) => {
        const [piece, composer, key] = curr.split('|');
        acc[piece] = {composer, key};
        return acc;
    }, {})

    
    const instructions = input.slice(numberOfPieces, input.length - 1);
 
    instructions.forEach(instruction => {
        const command = instruction.split('|');
        const currCommand = command.shift();
        
        if(currCommand === "Add"){
            const piece = command[0];
            const composer = command[1];
            const key = command[2];
            if(pieces.hasOwnProperty(piece)) {
                console.log(`${piece} is already in the collection!`)
            } else {
                pieces[piece] = {composer, key};
                console.log(`${piece} by ${composer} in ${key} added to the collection!`)
            }
        } else if(currCommand === "Remove"){
            const piece = command[0];
            if(pieces.hasOwnProperty(piece)) {
                delete pieces[piece];
                console.log(`Successfully removed ${piece}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        
        } else if(currCommand === "ChangeKey") {
            const piece = command[0];
            const newKey = command[1];
            if(pieces.hasOwnProperty(piece)){
                pieces[piece].key = newKey;
                console.log(`Changed the key of ${piece} to ${newKey}!`)
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }
    });
    Object.entries(pieces).forEach(([key, value]) => {
        console.log(`${key} -> Composer: ${value.composer}, Key: ${value.key}`)
    })
}

solve([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'  
  ]
  )