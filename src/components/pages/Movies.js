import React,{useState, useEffect} from "react";
import Preview from "../shared/Preview";
import {getAllMoviesApiRequest} from "../../services/api";
import PageHeader from "../shared/PageHeader";
import '../../style/moviesStyle.css';


function Movies() {
    // set the var and rerender
    const [movies, setMovies] = useState([]);
    // const [flag, setFlag] = useState(false);

    // run this only at the first time this app is started
    useEffect(function (){
        // Get the data
        // run once
        getAllMoviesApiRequest().then(data => setMovies(data.results));
        // unmount
        return () => {console.log("I'm dead")}
    }, []);

    return (
        <div>
            <PageHeader title={"Movies"}/>
            {/*<button onClick={() => setFlag(!flag)}>toggle</button>*/}
            <div id="moviesMnDiv">
                 {movies.map(movie => (
                     <Preview movie={movie}/>
                 ))}
            </div>
        </div>

    );
}

export default Movies


// <pre>{JSON.stringify(movie,1,1)}</pre>