import React,{useState, useEffect} from "react";
import Preview from "../shared/Preview";
import {getAllMoviesApiRequest} from "../../services/api";
import PageHeader from "../shared/PageHeader";
import '../../style/moviesStyle.css';


function Movies() {
    // set the var and rerender
    const [movies, setMovies] = useState([]);

    // run this only at the first time this app is started
    useEffect(function (){
        // Get the data
        getAllMoviesApiRequest().then(data => setMovies(data.results));
        // unmount
        return () => {console.log("I'm dead")}
    }, []);

    return (
        <div>
            <PageHeader title={"Movies"}/>
            <div className="moviesMnDiv">
                 {movies.map(movie => (
                     <span key={movie.id}>
                        <Preview movie={movie}/>
                     </span>
                 ))}
            </div>
        </div>

    );
}

export default Movies


// <pre>{JSON.stringify(movie,1,1)}</pre>