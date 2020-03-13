import React, { Component } from 'react';

class RandomKoala extends Component{
  constructor(){
    super()
    this.state={
      weight: 0
    }
  }

  renderKoalas = () => {
    return this.props.koalaArray.map((koala, index) => {
      return <h1>koala</h1>
    })
  }
  render(){
    return(
      <h1>{this.renderKoalas()}</h1>
    )
  }
}

export default RandomKoala;
