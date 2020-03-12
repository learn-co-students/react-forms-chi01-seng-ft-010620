import React, { Component } from "react";
import Form from "./Form";
import DisplayData from './DisplayData'

export default class ParentComponent extends Component {
  state = {
    firstName: "",
    lastName: ""
  };
  handleFirstName = event => {
    this.setState({
      firstName: event.target.value
    });
  };
  handleLastName = event => {
    this.setState({
      lastName: event.target.value
    });
  };
  render() {
    return (
        <div>
      <Form
        formData={this.state}
        handleFirstName={this.handleFirstName}
        handleLastName={this.handleLastName}
      />
      <DisplayData formData={this.state}/>
    </div>)
  }
}
