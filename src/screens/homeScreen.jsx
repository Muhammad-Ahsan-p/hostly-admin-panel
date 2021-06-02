import React, { Component } from "react";
import NavBar from "../components/navComponent";
import { Redirect, Route, Switch } from "react-router-dom";
import OverallStatistics from "../components/overallStaticticsComponent";
import UserStatistics from "../components/userStatisticComponent";
import AdStatistics from "../components/AdStatisticComponent";

import "./styles/home.css";

class HomeScreen extends Component {
  state = {};
  render() {
    return (
      <div className="homeContainer">
        <NavBar />
        <div className="contentContainer">
            <Switch>
              <Route
                path="/home/overall-statistics"
                component={OverallStatistics}
              />
              <Route path="/home/user-statistics" component={UserStatistics} />
              <Route
                path="/home/hostly-ad-statistics"
                component={AdStatistics}
              />
              <Redirect exact from="/home/" to="/home/overall-statistics" />
              <Redirect to="/not-found" />
            </Switch>
        </div>
      </div>
    );
  }
}

export default HomeScreen;
