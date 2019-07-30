
import React,{useState, useEffect} from "react";
import Navigation from "../shared/Navigation";
import {getMovieDetailsApiRequest} from "../../services/api";
import PageHeader from "../shared/PageHeader";
import FavoriteButton from "../shared/FavoriteButton";


const imgPathPrefix = 'https://image.tmdb.org/t/p/w200';
const divStyle = {
    border: "1px solid white",
    backgroundSize: "cover",
    display:"inline-flex",
    borderRadius: "20px",
    width: "700px",
    height: "400px",
    margin: "5px",
    marginTop: "100px",
    textAlign:"initial",
    padding: "10px",
};
// We can use match because App is rounded with BrowserRouter
function MovieDetails({match}) {
    const [movie, setMovie] = useState({
        title: "",
        overview: "",
        poster_path: ""
    });
    // run this only at the first time this up is started
    useEffect(function (){
        // Get the data
        // run once
        getMovieDetailsApiRequest(match.params.id).then(data => setMovie(data));
        console.log(match.params.id);
        // unmount
        return () => {console.log("I'm dead")}
    }, []);
    return (
        <div style={{textAlign:"center"}}>
            <PageHeader title={movie.title}/>
            <div style={divStyle}>
                <FavoriteButton isFavorite={true} movieID={match.params.id}/>
                <img style={{padding:"10px", display:"inline-block"}} src={ imgPathPrefix + movie.poster_path}/>
                <p style={{color: "white", textAlign:"left"}}>{movie.overview}</p>
                {/*<p>{movie.}</p>*/}

            </div>
        </div>

    );
}

export default MovieDetails
