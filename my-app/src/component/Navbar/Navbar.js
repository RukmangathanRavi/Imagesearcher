import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import classes from "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div className={classes.navcontent}>
        <Link to="/" className={classes.navlin}>
          ImageSearch
        </Link>
        <Link to="/logout" className={classes.navlin}>
          Logout
        </Link>
      </div>
    );
  }
}

export default Navbar;
