
import React from "react";
import Navigation from "../shared/Navigation";
import favoritesManager from "../../services/favoritesManager";

function Favorites() {
    const favories = favoritesManager

    return (

        <div>

            <h1 style={{color: "white"}}>Favorites</h1>
            <Navigation/>

        </div>

    );
}

export default Favorites
