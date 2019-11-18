import React, { Component } from 'react';
// import our MovieCard so we can send our Props down to it
import MovieCard from './card-components/MovieCard.js'
// import our data objects
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return an array of the correct JSX
    // console.log(movieData)
    // Iterate through our movieData array of objects and send all the props
    // down to movieCard to be split up between the CardBack and CardFront
    // classes
    return movieData.map(movie => 

      <li> 
        {/* call the MovieCard class and pass it the properties from 
        each of our movie (block variable) objects */}
        <MovieCard 
          title={movie.title}
          IMDBRating={movie.IMDBRating}
          genres={movie.genres}   // genres is an array
          poster={movie.poster}
        />
      </li>
    )  
  }

  render() {
    return (
      // because we're limited to returning one element, "div" in this case,
      // we created a separate function generateMovieCards() to do the heavy
      // lifting and return the inner html that will go inside the <div>
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
