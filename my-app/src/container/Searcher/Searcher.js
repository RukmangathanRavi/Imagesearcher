import React from "react";
import classes from "./Searcher.css";

const Searcher = (props) => {
  let imgse = props.Data;
  let abc = imgse.map((a) => a.urls);
  let imgrender = abc.map((a, index) => (
    <img
      key={index}
      className={classes.dis}
      src={a.raw}
      alt="image not avilable"
    />
  ));
  return (
    <div style={{ margin: "0px auto 0px" }}>
      <div className={classes.show}>{imgrender}</div>
    </div>
  );
};

export default Searcher;
