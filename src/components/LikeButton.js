import React from 'react';


class LikeButton extends React.Component{
  constructor(){
    super()
    this.state={
      likes: 0
    }
  }

  handleButton = (event) => {
    console.log(event.target.value)
    this.setState(previousState => {
      return {
        likes: previousState.likes + 1
      }
    })
  }

  render(){
    return(
      <button onClick={event => this.handleButton(event)}>{this.state.likes === 1 ? `${this.state.likes} Like` : `${this.state.likes} Likes`}</button>
    )
  }
}

export default LikeButton;
