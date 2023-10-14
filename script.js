function displayOutput(message) {
    const outputDiv = document.querySelector('.output');
    outputDiv.innerHTML += message + "<br>";
}
let allMovies = [];

//Define a movie class with parameters title (string), rating (number) and haveWatched (boolean)
class Movie {
    constructor(title, rating, haveWatched) {
        this.title = title;
        this.rating = rating;
        this.haveWatched = haveWatched;
    }

}

//add a movie OBJECT to the allMovies array
let addMovie = (movie) => {
    allMovies.push(movie);
    displayOutput("----------------");
    displayOutput("A new movie is added");
}

//iterate through all elements of allMovies array
//Display the total number of movies in allMovies array
let printMovies = () => {
    displayOutput("Printing all movies....");
    allMovies.forEach(movie => {
        displayOutput(`${movie.title}, rating of ${movie.rating}, havewatched: ${movie.haveWatched}`);
    });
    displayOutput(`You have ${allMovies.length} movies in total`);
}


//Display only the movies that has a rating higher than rating(argument)
//Display the total number of matches
let highRatings = (rating) => {
    let highRatedMovies = allMovies.filter(movie => movie.rating > rating);
    displayOutput("----------------");
    displayOutput(`printing movie that has a rating higher than ${rating}:`);
    highRatedMovies.forEach(movie => {
        displayOutput(`${movie.title} has a rating of  ${movie.rating}`);
    });
    displayOutput(`In total, there are ${highRatedMovies.length} matches`);
    //outputDiv.innerHTML += "----------------<br>";
}


//Toggle the 'haveWatched' property of the specified movie 
let changeWatched = (title) => {
    let movie = allMovies.find(movie => movie.title === title);
    displayOutput("----------------");
    

    if(movie) {
        movie.haveWatched = !movie.haveWatched;
    }
    displayOutput("changing the status of the movie...");
    displayOutput("----------------");

}



////////////////////////////////////////////////////////////
//Test code - DO NOT DELETE
let x = new Movie("Spiderman", 3, true);
let y = new Movie("Citizen Kane", 4, false);
let z = new Movie("Zootopia", 4.5, true);

allMovies.push(x,y,z);

/*replace console.log with display on web page*/
displayOutput('----------------');
displayOutput('running program......');
displayOutput('----------------');
printMovies();


let movie1 = new Movie("Parasite", 2, false);
addMovie(movie1);

changeWatched("Spiderman");
printMovies();

changeWatched("Spiderman");
printMovies();

highRatings(3.5);