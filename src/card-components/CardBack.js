import React, { Component } from 'react';


// map out aliases for our file names to the transparent pngs that have
// our stars for the ratings section.
import zero from '../assets/stars/0-stars.png'
import one from '../assets/stars/1-stars.png'
import two from '../assets/stars/2-stars.png'
import three from '../assets/stars/3-stars.png'
import four from '../assets/stars/4-stars.png'
import five from '../assets/stars/5-stars.png'

// we add another "translator" object with key-value pairs to convert the
// IMDBRatings we are getting from the "data.js" file (in the format 1,2,3,4,5)
// and matching the integer key to one of our aliases above. 

const imgMapper = {0: zero, 1: one, 2: two, 3: three, 4: four, 5: five}

// dont forget to export default so we can import this file above.
export default class CardBack extends Component {

  // create an anonymous arrow function to bind this function to the object
  // calling it.  Here we check for the null case (no rating) and if we pass
  // that we set the .src of the <IMG> tag to the value at the key location of
  // "this.props.IMDBRating".  So, imgMapper[5] or 5 star rating, would map to 
  // the word "five", which we aliased above to '../assets/stars/5-stars.png'
  // so the returned string on line 32 is
  // return <img src='../assets/stars/5-stars.png' alt="" />;
  // if null return "No rating found"

  generateRatingElement = () => {
    if (this.props.IMDBRating !== null) {
			return <img src={imgMapper[this.props.IMDBRating]} alt="" />;
		}
		return <h4>No Rating Found</h4>;
  }

  render() {
    console.log(this.props)
    return (
      <div className="card-back">
        <h3 className="title">{this.props.title}</h3>
        <span />
        { /* your rating element should go here -- you can invoke methods within JSX, à la: this.myMethod() */ }
        {/* // here we are calling an outside function to do the javascript that would break inside
        // the jsx code block. */}
        {this.generateRatingElement()}
        <span />
        {/* Here we are taking the genres array of strings and joining them together using a comma
        and a space. */}
        <h5 className="genres">{this.props.genres.join(', ')}</h5>
      </div>
    )
  }
}
