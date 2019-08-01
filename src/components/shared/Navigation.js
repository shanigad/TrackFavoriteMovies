import React from "react";
import {Link} from "react-router-dom";
import '../../style/navigationStyle.css';

function Navigation() {

    return (
        <div id="mainDiv">
                <Link className="linkStyle" to="/"> All Movies </Link>
                <Link className="linkStyle" to="/favorites"> My Favorites </Link>
        </div>

    );
}

export default Navigation
