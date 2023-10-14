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
    let outputDiv = document.querySelector(".output");
    outputDiv.innerHTML += "A new movie is added<br>";
}

//iterate through all elements of allMovies array
//Display the total number of movies in allMovies array
let printMovies = () => {
    let outputDiv = document.querySelector(".output");
    outputDiv.innerHTML = "Printing all movies....<br>";
    allMovies.forEach(movie => {
        outputDiv.innerHTML += `${movie.title}, rating of ${movie.rating}, havewatched: ${movie.haveWatched}<br>`;
    });
    outputDiv.innerHTML += `<br>You have ${allMovies.length} movies in total<br>`;
}


//Display only the movies that has a rating higher than rating(argument)
//Display the total number of matches
let highRatings = (rating) => {
    let highRatedMovies = allMovies.filter(movie => movie.rating > rating);
    let outputDiv = document.querySelector(".output");
    outputDiv.innerHTML += `printing movie that has a rating higher than ${rating}:<br>`;
    highRatedMovies.forEach(movie => {
        outputDiv.innerHTML += `${movie.title} has a rating of  ${movie.rating}<br>`;
    });
    outputDiv.innerHTML += `In total, there are ${highRatedMovies.length} matches<br>`;
    outputDiv.innerHTML = "----------------<br>";
}


//Toggle the 'haveWatched' property of the specified movie 
let changeWatched = (title) => {
    let movie = allMovies.find(movie => movie.title === title);
    let outputDiv = document.querySelector(".output");

    if(movie) {
        movie.haveWatched = !movie.haveWatched;
    }
    outputDiv.innerHTML = "changing the status of the movie...<br>";
}



////////////////////////////////////////////////////////////
//Test code - DO NOT DELETE
let x = new Movie("Spiderman", 3, true);
let y = new Movie("Citizen Kane", 4, false);
let z = new Movie("Zootopia", 4.5, true);

allMovies.push(x,y,z);

/*replace console.log with display on web page*/
console.log("----------------");
console.log("running program......");
console.log("----------------");
printMovies();


let movie1 = new Movie("Parasite", 2, false);

/*replace console.log with display on web page*/
console.log("----------------");
addMovie(movie1);
console.log("----------------");



changeWatched("Spiderman");
/*replace console.log with display on web page*/
console.log("----------------");

printMovies();

/*replace console.log with display on web page*/
console.log("----------------");

changeWatched("Spiderman");
/*replace console.log with display on web page*/
console.log("----------------");

printMovies();
/*replace console.log with display on web page*/
console.log("----------------");

highRatings(3.5);