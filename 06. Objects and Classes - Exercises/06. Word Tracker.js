function solve(input) {
    let searchedWords = input[0];
    arr = input.slice(1);
    let countetArr = arr.reduce((acc, curr) => {
        if(!acc.hasOwnProperty(curr)){
            acc[curr] = 0;
        }
        acc[curr] += 1;
        return acc;
    }, {})
    let completedWords = searchedWords.split(' ').reduce((acc, curr) => {
        acc[curr] = countetArr[curr]
        return acc;
    }, {})
    completedWords.sort(function(a, b) {
        return a[1] - b[1]});
    console.log(completedWords)
    
    // searchedWords
    // .split(' ')
    // .forEach(word => {
    //     console.log(`${word} - ${countetArr[word]}`)
    // });
}
solve([
    'is the',
    'first', 'sentence', 'Here', 'is',
    'another', 'the', 'And', 'finally', 'the',
    'the', 'sentence']
    
    )