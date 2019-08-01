// import ls from 'local-storage';

    // let favorites = [];
    const myStorage = window.localStorage;
    export function isFavorite(movieID) {
        return myStorage.getItem(movieID) !== null;
    }

    export function addToFavorites(movieID, movie) {
        // favorites.push(movieID);
        myStorage.setItem(movieID, movie);
    }

    export function deleteFromFavorites(movieID) {
        myStorage.removeItem(movieID);
    }

    // export function getAllFavorites() {
        // let retVal = [];
        // let tempFav = [];
        // favorites.forEach(movieID => {
        //     const favMovie = myStorage.getItem(movieID);
        //     if (favMovie !== null){
        //         retVal.push(favMovie);
        //         tempFav.push(movieID);
        //     }
        // });
        // favorites = tempFav;
        // return retVal;
    // }

    // export function setAllFavorites(favMovies) {
        // console.log("setAllFavorites size: " + favMovies);
        // favorites = favMovies;
    // }


