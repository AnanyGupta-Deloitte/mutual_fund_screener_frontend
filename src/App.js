import { AuthContext } from "./Components/ContextApi/AuthProvider";
import React, { useContext } from "react";

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Calculator from "./Components/Calculator";
import Login from "./Components/LoginComponents/Login";
import Signup from "./Components/LoginComponents/Signup";
import MutualFundPage from "./Components/UserComponents/MutualFundPage";
import UserDashboard from "./Components/UserComponents/UserDashboard";
import UserProfile from "./Components/UserComponents/UserProfile";
import AdminDashboard from "./Components/AdminDashboard";

let App = () => {
  const { user, isAdmin } = useContext(AuthContext);
  console.log(isAdmin);

  return (
    <Router>
      <Switch>
        {user ? (
          <>
            <Route path="/" component={UserDashboard} exact></Route>
            <Route path="/calculator" component={Calculator}></Route>
            <Route path="/userprofile" component={UserProfile} exact></Route>
            <Route
              path="/mutualfunds/:id"
              component={MutualFundPage}
              exact
            ></Route>
            {isAdmin ? (
              <Route path="/admin" exact>
                <AdminDashboard />
              </Route>
            ) : (
              <Route path="/admin" exact>
               <Redirect to="/"></Redirect>{" "}
              </Route>
            )}
            <Route path="/login" exact>
              {" "}
              <Redirect to="/"></Redirect>{" "}
            </Route>
          </>
        ) : (
          <>
            <Route path="/" component={UserDashboard} exact></Route>
            <Route path="/calculator" component={Calculator}></Route>
            <Route path="/login" component={Login} exact></Route>
            <Route path="/signup" component={Signup} exact></Route>
            <Redirect to="/"></Redirect>
          </>
        )}
      </Switch>
    </Router>
  );
};

export default App;
