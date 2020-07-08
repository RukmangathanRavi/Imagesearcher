import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import Navbar from "../src/component/Navbar/Navbar";
import Imagesearch from "../src/container/Imagesearch/Imagesearch";

class Layout extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Route path="/" component={Imagesearch} />
        <Redirect from="/logout" to="/" />
      </div>
    );
  }
}

export default Layout;
