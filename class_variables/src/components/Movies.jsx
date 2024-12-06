import React, { Component } from 'react'

class Movies extends Component {


  render() {
    let a = 10;
    let b = 20;
    return (
      <div>
        <p>a:{a}</p>
        <p>b:{b}</p>
        <p>c:{a + b}</p>
      </div>
    )
  }
}

export default Movies
