import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Login from "./Components/Login"

let App = () => {
  return (
      <Login></Login>
  );
};

export default App;
