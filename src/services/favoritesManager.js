import FavoriteButton from "../components/shared/FavoriteButton";


class favoritesManager {
    constructor(){
        this.myfavoritMovies = [550];
    }

    getAllFavorites(){
        return this.myfavoritMovies;
    }

    addToFavorites(movieID){
        this.myfavoritMovies.push(movieID);
    }

}



export default favoritesManager
