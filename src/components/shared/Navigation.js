import React from "react";
import {Link} from "react-router-dom";

const mainDivStyle = {
    position:'fixed',
    margin:'5px',
    right:'0px',
    top:'30px',
};


const linkStyle = {
    fontSize: '15px',
    margin:'5px',
    color:'black',
    backgroundColor:'#ced3ec',
    border:'1px',
    borderRadius:'7px',
    padding:'5px',
    fontWeight:'bold',
    textDecoration:'none'
};

function Navigation() {

    return (
        <div style = {mainDivStyle}>
                <Link style={linkStyle} to="/"> All Movies </Link>
                <Link style={linkStyle} to="/favorites"> My Favorites </Link>
        </div>

    );
}

export default Navigation
