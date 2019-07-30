import React from "react";
import {Link} from "react-router-dom";
import '../../style/navigationStyle.css';

function Navigation() {

    return (
        <div id="mainDiv">
                <Link class="linkStyle" to="/"> All Movies </Link>
                <Link class="linkStyle" to="/favorites"> My Favorites </Link>
        </div>

    );
}

export default Navigation
