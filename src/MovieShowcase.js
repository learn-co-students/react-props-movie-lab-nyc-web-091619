import React, { Component } from "react";
import MovieCard from "./card-components/MovieCard.js";
import movieData from "./data.js";

export default class MovieShowcase extends Component {
  generateMovieCards = () => {
    // map over your movieData array and return an array of the correct JSX
    return movieData.map(obj => {
      return (
        <MovieCard
          title={obj.title}
          IMDBRating={obj.IMDBRating}
          genres={obj.genres}
          poster={obj.poster}
        />
      );
    });
  };

  render() {
    return <div id="movie-showcase">{this.generateMovieCards()}</div>;
  }
}
