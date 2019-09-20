import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Movies from "./components/pages/Movies";
import MovieDetails from "./components/pages/MovieDetails";
import Favorites from "./components/pages/Favorites";

function App() {
  return (
      <div style={{backgroundColor:'black'}}>
          <BrowserRouter>
            <Route exact path='/' component={Movies}/>
            <Route path='/movieDetails/:id' component={MovieDetails}/>
            <Route path='/favorites' component={Favorites}/>
          </BrowserRouter>
      </div>
  );
}

export default App;
