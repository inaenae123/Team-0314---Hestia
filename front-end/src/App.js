import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import UserProfile from "./components/profile/UserProfile";
import Questionnaire from "./components/profile/Questionnaire";
import Room from "./components/rooms/Room";
import Profiles from "./components/listings/Profiles";
import Rooms from "./components/rooms/Rooms";
import Profile from "./components/listings/Profile";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}



class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />

          <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <Route exact path="/userprofile" component={UserProfile} />
              <Route exact path="/questionnaire" component={Questionnaire} />
              <Route exact path="/profiles" component={Profiles} />
              <Route exact path="/rooms" component={Rooms} />
              <Route path="/room/:id" component={Room} />
              <Route path="/profile/:id" component={Profile} />
          </Switch>
        </div>
      </Router>
      </Provider>
    );
  }
}

export default App;
