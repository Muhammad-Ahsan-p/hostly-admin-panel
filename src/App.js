import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import HomeScreen from "./screens/homeScreen";
import LoginScreen from "./screens/loginScreen";
import NotFound from "./screens/notFoundScreen";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/home" component={HomeScreen} />
          <Route path="/login" component={LoginScreen} />
          <Redirect exact from="/" to="/home" />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
