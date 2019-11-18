// import image URLs, basically aliasing these paths to a variable name
// in white.

import defaultPoster from '../assets/poster-imgs/default.png'
import cmi from '../assets/poster-imgs/choux-and-maru-go-to-istanbul.png'
import cmp1 from '../assets/poster-imgs/choux-and-maru-p1.png'
import cb from '../assets/poster-imgs/chromeboi.png'
import efv from '../assets/poster-imgs/escape-from-vim.png'
import goldeneye from '../assets/poster-imgs/goldeneye.jpg'
import hbmc from '../assets/poster-imgs/handsome-boy-modeling-club.png'
import msts from '../assets/poster-imgs/marus-spinoff-trapped-in-the-sheets.png'
import tkr from '../assets/poster-imgs/terrance-king-of-the-rats.png'
import ttm from '../assets/poster-imgs/the-trash-man.png'

import React, { Component } from 'react';

// import our Card front/back classes so we can send props down to 
// them and after receiving their return, sending them up to the
// MovieShowcase.js
import CardFront from './CardFront.js';
import CardBack from './CardBack.js';


// mapping out the names of the files that will be returned from the 
// data.js name for "poster" to the alias we created above to the actual
// file path (relative to the directory that this file (MovieCard.js) is in.)
const posterMap = {
  'choux-maru-istanbul': cmi,
  'choux-maru-part-1': cmp1,
  'chromeboi': cb,
  'escape-from-vim': efv,
  'goldeneye': goldeneye,
  'handsome-boy': hbmc,
  'marus-spinoff': msts,
  'terrance-king': tkr,
  'the-trash-man': ttm,
  'default': defaultPoster
}

// make sure we export default so that we can import MovieCard
// further upstream
export default class MovieCard extends Component {

  render() {
    // checking if our data is coming through our .Map enumerable in
    // MovieShowcase.js on data.js

    // console.log(this.props)
    return (
      <div className="movie-card">
        {/* which component should receive which props? */}
        {/* Here we split up the props that were sent down to us through the
        .map method, used on data.js. */}
        <CardFront 
          // here we are actually sending mutated data, which is the data
          // at the key of "this.props.poster" in the posterMap array.  So
          // if the prop for "poster" being sent down is "chromeboi" that is
          // paired with "cb", which is aliased at the top of the page to
          //'../assets/poster-imgs/chromeboi.png'
          poster={posterMap[this.props.poster]}
        />
        <CardBack 
          title={this.props.title}
          IMDBRating={this.props.IMDBRating}
          genres={this.props.genres}
        />
      </div>
    )
  }
}

// Don't forget your default props!
// .defaultProps is an object with keys mapped to values in case our props
// from our .map are empty.  If any of the values is empty, react will substitute
// these key-value pairs.  Perhaps, this is the place we put these defaultProps 
// because it is the last place we have all the props being sent down in one place.
MovieCard.defaultProps = {
  title: 'Unknown',
  IMDBRating: null,
  genres: ['No Genre(s) Found'],
  poster: 'default'
}