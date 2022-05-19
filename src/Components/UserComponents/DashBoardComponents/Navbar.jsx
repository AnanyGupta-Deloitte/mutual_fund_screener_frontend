import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AccountCircle from "@mui/icons-material/AccountCircle";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { Link } from "react-router-dom";
import CalculateIcon from "@mui/icons-material/Calculate";
import { AuthContext } from "../../ContextApi/AuthProvider";
const Navbar = () => {
  const { user, logout, isAdmin } = useContext(AuthContext);

  const clickFunc = () => {
    logout();
  };
  return (
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        <Link style={{ color: "#FFF", textDecoration: "none" }} to="/">
          Mutual Fund Screener
        </Link>
      </Typography>
      <Box
        sx={{
          boxSizing: "border-box",
         width: ["25vh"],
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          marginRight: "1vh",
        }}
      >
        <Link style={{ color: "#FFF" }} to="/calculator">
          <CalculateIcon fontSize="large" />
        </Link>

        {isAdmin ? (
          <Link style={{ color: "#FFF" }} to={isAdmin ? "/admin" : "/"}>
            <AdminPanelSettingsIcon fontSize="large" />
          </Link>
        ) : (
          ""
        )}
        {user ? (
          <>
            <Link
              style={{ color: "#FFF" }}
              to={user ? "/userprofile" : "/login"}
            >
              <AccountCircle fontSize="large" />
            </Link>
            <Button
              variant="contained"
              disableElevation
              color="secondary"
              onClick={clickFunc}
            >
              {" "}
              Logout
            </Button>
          </>
        ) : (
          <Link style={{ color: "#FFF", textDecoration: "none" }} to="/login">
            <Button variant="contained" disableElevation color="secondary">
              {" "}
              Login
            </Button>
          </Link>
        )}
      </Box>
    </Toolbar>
  );
};
export default Navbar;
