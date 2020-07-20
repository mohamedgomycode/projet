import React, { Component } from "react"
import axios from "axios"
export default class Shopping extends Component {
  constructor() {
    super();
    this.state = {
      calcule: 0,
     
    };
  }
  handlebuttonClick = () => {
    axios.get(`getMyProject`)
      .then(res => {
        const response = res.data;
        this.setState({ response });
      
      })
      this.setState({
        calcule: this.state.calcule +1
      });
   
  };
  render() {
    return (
      <div>
        <button  onClick={this.handlebuttonClick}>clique ici</button>
        <h1> result is : {this.state.calcule} </h1>
      </div>
    );
  }
}
