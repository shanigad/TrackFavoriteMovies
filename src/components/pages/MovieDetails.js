
import React,{useState, useEffect} from "react";
import {getMovieDetailsApiRequest} from "../../services/api";
import PageHeader from "../shared/PageHeader";
import FavoriteButton from "../shared/FavoriteButton";
import '../../style/movieDetailsStyle.css';



const imgPathPrefix = 'https://image.tmdb.org/t/p/w200';
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
        <div id="movieDtlsMnDiv">
            <PageHeader title={movie.title}/>
            <div id="moviePreviewDiv">
                <FavoriteButton isFavorite={true} movieID={match.params.id}/>
                <img id="movieDtlsImg" src={imgPathPrefix + movie.poster_path}/>
                <p id="movieSmry">{movie.overview}</p>

            </div>
        </div>

    );
}

export default MovieDetails
