
import React from "react";
import {Link} from "react-router-dom";



const divStyle = {
    position: 'fixed',
    right: '0px',
    top: '30px',
    backgroundColor: 'black'
};
const linkStyle = {
    fontSize: '15px',
    marginRight: '10px',
    color:"black",
    backgroundColor:"#ced3ec",
    border:"1px",
    borderRadius:"7px",
    padding:"3px",
    fontWeight:"bold",
    textDecoration:"none"
};

const ulStyle = {
    border: 'black'
};

function Navigation() {
    return (

        <div style={divStyle}>
            {/*<ul style={ulStyle}>*/}
                <Link style={linkStyle} to="/"> All Movies </Link>
                {/*<li><Link to="/movieDetails"> Movie Details </Link></li>*/}
                <Link style={linkStyle} to="/favorites"> My Favorites </Link>
            {/*</ul>*/}


        </div>

    );
}

export default Navigation
