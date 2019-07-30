const allMoviesURL = "https://api.themoviedb.org/3/movie/top_rated?api_key=47d1a5ff371259d42dba43045238cdbd&language=en-US&page=1";

export function getAllMoviesApiRequest() {
    // return a response as json (promise - an object that holds the data)
    return fetch(allMoviesURL).then(response => response.json())
}

export function getMovieDetailsApiRequest(movieId) {
    let url = `https://api.themoviedb.org/3/movie/${movieId}?&api_key=cfe422613b250f702980a3bbf9e90716`;
    console.log(movieId);
    return fetch(url).then(response => response.json())
}