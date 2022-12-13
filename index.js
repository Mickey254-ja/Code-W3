// fetches  a list of movies from the db.json file
const baseUrl = "http://localhost:3000/films";
function fetchMovies(){
    fetch(baseUrl)
        .then((response) => response.json()) //brings the response as a promise
        .then((data) =>{
            data.forEach((films) =>{