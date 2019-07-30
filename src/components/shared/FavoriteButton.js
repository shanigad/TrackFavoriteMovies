import React,{useState} from "react";
import '../../style/FavorireBtnStyle.css';

function  FavoriteButton({isFavorite}, {movieID}) {
    let [isFav, setFavorite] = useState(isFavorite);
    const btnID = "favBtn" + movieID;

    return (
        <div>
            <button class="favoriteBtn"id={btnID}
                    onClick = {() => setFavorite(!isFav)}
            style={{color:isFav?'#ffe45dfc':'white'}}>&#9733;</button>
        </div>
    );
}



export default FavoriteButton
