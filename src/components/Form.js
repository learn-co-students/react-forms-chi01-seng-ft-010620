import React from 'react';
import LikeButton from './LikeButton'
import RandomKoala from './RandomKoala'

class Form extends React.Component {
  constructor(){
    //  initialize default state for component
    super()
    this.state = {
      names: {
        firstName: "",
        lastName: "",
        submittedData: []
      },
      occupations: ["chef", "developer", "CEO", "accountant", "artist", "teacher"],
      isEmployed: false
    }
  }

  handleFirstNameChange = event => {
    console.log(event.target.value)
    this.setState({
      names: {
        ...this.state.names,
        firstName: event.target.value
      }
    })
  }

  renderOccupations = () => {
    return this.state.occupations.map(job => {
      return <option>{job}</option>
    })
  }

  handleLastNameChange = event => {
    console.log(event.target.value)
    debugger
    this.setState({
      names: {
        ...this.state.names,
        lastName: event.target.value
      }
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(event.target)
    let formData = {firstName: this.state.names.firstName, lastName: this.state.names.lastName}
    let dataArray = this.state.names.submittedData.concat(formData)
    this.setState({
      names: {
        ...this.state.names,
        submittedData: dataArray
      }
    })

  }

  handleCheck = (event) => {
    if (event.target.checked === true) {
      this.setState({
        isEmployed: true
      })
    } else if (event.target.checked === false) {
      this.setState({
        isEmployed: false
      })
    }

  }

  submittedData = () => {
    return this.state.names.submittedData.map((name, index) => {
      return <div>
                <h1>{index + 1}. {name.firstName} {name.lastName}
                <LikeButton />
                </h1>
              </div>
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
        <label>First Name: </label>
          <textarea cols={40} rows={10} name="firstName" placeholder="Enter First Name..." onChange={event => this.handleFirstNameChange(event)} value={this.state.names.firstName} />
        <label>Last Name: </label>
          <textarea cols={40} rows={10} type="text" name="lastName" placeholder="Enter Last Name..." onChange={event => this.handleLastNameChange(event)} value={this.state.names.lastName} />
        <label>Occupation: </label>
          <select>
            {this.renderOccupations()}
          </select>
          <label>Are you employed?</label>
          <input onChange={event => this.handleCheck(event)} type="checkbox"/>
          <input type="submit" name="submit" value="submit form" />
        </form>
        {this.submittedData()}
      </div>
    )
  }
}

export default Form;
