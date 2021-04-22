import React, { Component } from "react";
import NavBar from "../components/navComponent";
import "../colors.css";
import "./styles/home.css";
import Side from "../components/sideComponent";
import { Redirect, Route, Switch } from "react-router-dom";
import OverallStatistics from "../components/overallStaticticsComponent";
import UserStatistics from "../components/userStatisticComponent";
import HostlyAdStatistics from "../components/hostlyAdStatisticComponent";

class HomeScreen extends Component {
  state = {};
  render() {
    return (
      <div className="bgBlack homeContainer">
        <NavBar />
        <div className="contentContainer">
          <Side />

          <div className="statContainer">
            <Switch>
              <Route
                path="/home/overall-statistics"
                component={OverallStatistics}
              />
              <Route path="/home/user-statistics" component={UserStatistics} />
              <Route
                path="/home/hostly-ad-statistics"
                component={HostlyAdStatistics}
              />
              <Redirect exact from="/home/" to="/home/overall-statistics" />
              <Redirect to="/not-found" />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeScreen;
