function solve(input) {
    let movies = [];

    input.forEach((command) => {
        if(command.includes("addMovie")){
            const [_, name] = command.split('addMovie ')
            let movie = {
                name,
                director: null,
                date: null,
            };
            movies.push(movie);
        } else if(command.includes("directedBy")){
            const [movieName, directorName] = command.split(' directedBy ');
            const movie = movies.find(m => m.name === movieName);
            if(movie) {
                movie.director = directorName;
            }
        } else if(command.includes("onDate")){
            const[movieName, date] = command.split(' onDate ')
            const movie = movies.find((m) => m.name === movieName);
            if (movie) {
              movie.date = date;
            }
        }
    });

    movies
    .filter(m => m.name && m.director && m.date)
    .forEach(m => console.log(JSON.stringify(m)))
}