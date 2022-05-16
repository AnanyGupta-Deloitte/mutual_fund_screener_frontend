
import React from "react";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Calculator from "./Components/Calculator";
import ForgotPassword from "./Components/ForgotPassword";
// import ForgotPassword from "./Components/ForgotPassword";
import Login from "./Components/Login"
import Signup from "./Components/Signup"
import MutualFundPage from "./Components/UserComponents/MutualFundPage";
import UserDashboard from "./Components/UserComponents/UserDashboard";
import UserProfile from "./Components/UserComponents/UserProfile";

let App = () => {
  return (
    <Router>
      
      <Route path="/login" component={Login} exact></Route>
      <Route path="/signup" component={Signup} exact></Route>
      <Route path="/forgot-password" component={ForgotPassword} exact></Route>
      <Route path="/" component={UserDashboard} exact></Route>
      <Route path="/user-profile" component={UserProfile} exact></Route>
      
      <Route path="/mutual-funds/:id" component={MutualFundPage}></Route>
      <Route path="/calculator" component={Calculator}></Route>

   
    </Router>
  );
};

export default App;
