import React, { Component } from "react";

class Movies1 extends Component {
  movie = "Puspa2";
  actor = "AA";
  actress = "RM";
  image =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlibScJYrwzzEDCEITV9sZGaz_bybvR0UOBw&s";
  render() {
    return (
      <div>
        <h1>Movie Details</h1>
        <h2>Movie Name:{this.movie}</h2>
        <h2>Actor Name:{this.actor}</h2>
        <h2>Actress Name:{this.actress}</h2>
        <img src="{image}" alt="pushpa2" />
      </div>
    );
  }
}

export default Movies1;
