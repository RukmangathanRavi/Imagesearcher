import React, { Component } from "react";
import classes from "./Formcomponent.css";
import Searcher from "../Searcher/Searcher";
import axios from "axios";

class Formcomponent extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
      Data: [],
    };
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    axios
      .get(
        `https://api.unsplash.com/search/photos/?query=${this.state.search}`,
        {
          headers: {
            Authorization:
              "Client-ID UXOobA6ZGMO7pkaqUUqTTi6WYAopL2LgJedHSBIjrbo",
          },
        }
      )
      .then((res) => this.setState({ Data: res.data.results }));
  };

  handleChange = (evt) => {
    this.setState({ search: evt.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit} className={classes.head}>
          <input
            type="text"
            value={this.state.search}
            placeholder="Searchhere"
            onChange={this.handleChange}
          />
        </form>
        <h1>You have searched for {this.state.search}</h1>
        <Searcher Data={this.state.Data} />
      </React.Fragment>
    );
  }
}

export default Formcomponent;
