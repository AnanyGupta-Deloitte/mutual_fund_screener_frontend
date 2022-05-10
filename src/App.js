
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ForgotPassword from "./Components/ForgotPassword";
// import ForgotPassword from "./Components/ForgotPassword";
import Login from "./Components/Login"
import Signup from "./Components/Signup"

let App = () => {
  return (
    <Router>
      <Route path="/login" component={Login}></Route>
      <Route path="/signup" component={Signup}></Route>
      <Route path="/forgot-password" component={ForgotPassword}></Route>
    </Router>
  );
};

export default App;
