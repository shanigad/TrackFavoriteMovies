
import React, {useEffect,useState} from "react";
import {isFavorite} from "../../services/favoritesManager";
import PageHeader from "../shared/PageHeader";
import Preview from "../shared/Preview";
import {getAllMoviesApiRequest} from "../../services/api";




function Favorites() {
    const [favorites, setFavorites] = useState([]);

    useEffect(function (){
        getAllMoviesApiRequest().then(data =>setFavorites(data.results.filter(movie => isFavorite(movie.id))));
        // unmount
        return () => {console.log("I'm dead")}
    }, []);
    return (
        <div>
            <PageHeader title="Favorites"/>
            <div className="moviesMnDiv">
                {favorites.map(movie => (
                    <Preview movie={movie}/>
                ))}
            </div>
        </div>

    );
}

export default Favorites
