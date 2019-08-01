import React,{useState, useEffect} from "react";
import '../../style/FavorireBtnStyle.css';
import {deleteFromFavorites,addToFavorites} from "../../services/favoritesManager";

function  FavoriteButton(props) {
    let [isFav, setFavorite] = useState(props.isFavorite);
    const movie = props.movie;
    const movieID = movie.id;
    const btnSize = props.size + "px";
    const btnID = "favBtn" + movieID;

    useEffect(function (){
        if(isFav){
            addToFavorites(movieID, movie);
        }
        else{
            // console.log("I'm removing " + movieID + " to fav!!");
            deleteFromFavorites(movieID);
        }
        return () => {console.log("I'm dead")}
    }, [isFav]);

    return (
        <span>
            <button className="favoriteBtn" id={btnID}
                    onClick = {() => setFavorite(!isFav)}
            style={{color:isFav?'#ffe45dfc':'white'}}>&#9733;</button>
        </span>
    );
}



export default FavoriteButton
