function solve(input) {
    
    let heroes = input.map((hero) => {
        const [name , level, ...items] = hero.split(' / ');
        return {name, level, items};
       })
       sortedHeroes = [...heroes].sort((a, b) => {
        return a.level - b.level
       })
       sortedHeroes.forEach((hero) => {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`)
        });
}