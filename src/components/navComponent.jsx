import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles/navbar.css";

class NavBar extends Component {
  state = {
    unwrappedClass: false,
    rotate: false,
  };
  render() {
    return (
      <div className="navContainer">
        <h1 className="title">Hostly</h1>
        <div
          className={"icon" + (this.state.rotate ? " rotate" : "")}
          onClick={(event) => {
            this.setState({ unwrappedClass: !this.state.unwrappedClass });
            this.setState({ rotate: !this.state.rotate });
          }}
        ></div>
        <div className={"menu" + (this.state.unwrappedClass ? " unwrap" : "")}>
          <Link to="/home/overall-statistics" className="menuButton">
            Overall Statistics
          </Link>

          <Link to="/home/user-statistics" className="menuButton">
            User Statistics
          </Link>
          <Link to="/home/hostly-ad-statistics" className="menuButton">
            Ad Statistics
          </Link>
          <Link to="/home/add-city" className="menuButton">
            Add City
          </Link>
          <Link className="menuButton" to="/logout">
            Log Out
          </Link>
        </div>
      </div>
    );
  }
}

export default NavBar;
