import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles/side.css";

class Side extends Component {
  state = {};
  render() {
    return (
      <div className="sideBar">
        <nav className="sideNav">
          <ul>
            <Link to="/home/overall-statistics" className="navItem">
              Overall Statistics
            </Link>
            <Link to="/home/user-statistics" className="navItem">
              User Statistics
            </Link>
            <Link to="/home/hostly-ad-statistics" className="navItem">
              Hostly Ad Statistics
            </Link>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Side;
