
import React from "react";
import {Link} from "react-router-dom";


const imgPathPrefix = 'https://image.tmdb.org/t/p/w200';
const divStyle = {
    border: "1px solid white",
    backgroundSize: "cover",
    display:"inline-block",
    borderRadius: "20px",
    textAlign: "center",
    width: "230px",
    height: "400px",
    margin: "5px",
    marginBottom: "20px",
    padding: "10px"};

const  Preview = ({movie}) => (
    // const {movie} = props
    //
        <>
        <Link style ={{ textDecoration:"none", marginRight:"5px", top:"10px"}} to={'/movieDetails/' + movie.id}>
            <div style={divStyle}>
                <h3 style={{color: "white", height:"12%"}}>{movie.title}</h3>
                <img src={ imgPathPrefix + movie.poster_path}/>
            </div>
        </Link>
        </>

    );


export default Preview
