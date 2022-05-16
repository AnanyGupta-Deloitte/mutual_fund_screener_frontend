import React, { useState } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Login } from "@mui/icons-material";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import CalculateIcon from '@mui/icons-material/Calculate';
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
      <Link style={{ color: "#FFF",textDecoration:"none"}} to="/">Mutual Fund Screener</Link>
      </Typography>
      <Box
        sx={{
          boxSizing: "border-box",
          width: ["15vh"],
          display: "flex",
          justifyContent: "space-between",
          marginRight: "1vh",
        }}
      >
        <Link style={{ color: "#FFF" }} to="/calculator">
          <CalculateIcon />
        </Link>
        <Link style={{ color: "#FFF" }} to="/user-profile">
          <AccountCircle />
        </Link>
        {isLoggedIn ? (
          <LogoutIcon onClick={handleLogout} />
        ) : (
          <Link style={{ color: "#FFF" }} to="/login">
          <Login  onClick={handleLogin} />
          </Link>
        )}
      </Box>
    </Toolbar>
  );
};
export default Navbar;
