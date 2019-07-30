import React,{useState} from "react";

function  FavoriteButton({isFavorite}, {movieID}) {
    // const {isFavorite} = props;
    let [isFav, setFavorite] = useState(isFavorite);
    const btnID = "favBtn" + movieID;

    return (
        <div>
            <button id={btnID}
                    onClick = {()=>setFavorite(!isFav)}
            style={{color:isFav?'#ffe45dfc':'white',
                fontSize:'50px', height:'50px', backgroundColor:'black', borderColor:'black'}}>&#9733;</button>
        </div>
    );
}



export default FavoriteButton
