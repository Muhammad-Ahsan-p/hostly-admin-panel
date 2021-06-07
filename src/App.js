import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import HomeScreen from "./screens/homeScreen";
import LoginScreen from "./screens/loginScreen";
import NotFound from "./screens/notFoundScreen";
import authService from "./services/authService";
import Logout from "./components/logoutComponent";

function App(props) {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route
            path="/login"
            render={(props) => {
              return <LoginScreen {...props} />;
            }}
          />
          <Route
            path="/home"
            render={(props) => {
              if (!authService.getUser()) {
                return <Redirect to="/login" />;
              }
              return <HomeScreen />;
            }}
          />
          <Route path="/logout" component={Logout} />
          <Redirect exact from="/" to="/login" />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
