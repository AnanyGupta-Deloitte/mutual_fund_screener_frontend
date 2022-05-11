import React, { useState } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Login } from "@mui/icons-material";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  const handleLogout = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Mutual Fund Screener
      </Typography>
      <Box
        sx={{
          boxSizing: "border-box",
          width: ["10vh"],
          display: "flex",
          justifyContent: "space-between",
          marginRight: "1vh",
        }}
      >
        <Link style={{ color: "#FFF" }} to="/user/profile">
          <AccountCircle />
        </Link>
        {isLoggedIn ? (
          <LogoutIcon onClick={handleLogout} />
        ) : (
          <Login onClick={handleLogin} />
        )}
      </Box>
    </Toolbar>
  );
};
export default Navbar;
