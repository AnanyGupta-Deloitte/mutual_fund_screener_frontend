import React, { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import LoginIcon from "@mui/icons-material/Login";
import {
  TextField,
  Box,
  Button,
  Typography,
  InputAdornment
} from "@mui/material";
import {Link } from "react-router-dom";
import Poster from "./Poster";

let Login = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const handleLogin = () => {
    // console.log("password : ", password)
    if (!password) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
    if (!username) {
      setUsernameError(true);
    } else {
      setUsernameError(false);
    }

    // console.log(password, passwordError);
    // console.log(username, usernameError);
  };
  return (
    <Box
      sx={{
        width: [0, 0, 340, 430, 480],
        position: "fixed",
        top: [0, 0, "25vh", "15vh", "14vh"],
        left: [0, 0, "5vw", "5vw", "15vw"],
        borderRadius: "1rem",
      }}
    >
      <Poster/>
      <Box
        sx={{
          width: ["75vw", "62.5vw", "25vw", "25vw", "25vw"],
          height: "50vh",
          border: 1,
          borderRadius: "1vw",
          borderColor: "primary.main",
          padding: 10,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          position: "fixed",
          top: "20vh",
          right: [0, "12vw", "12vw", "12vw", "12vw"],
        }}
      >
        <Typography variant="h3" color={"primary.main"}>
          Login
        </Typography>
        <TextField
          required
          id="standard-required"
          label="User Name"
          variant="standard"
          value={username}
          error={usernameError}
          helperText={usernameError ? "Username required" : ""}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <TextField
          required
          id="standard-password-input"
          label="Password"
          type={passwordVisibility ? "text" : "password"}
          autoComplete="current-password"
          variant="standard"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                {passwordVisibility ? (
                  <Visibility
                    onClick={() => {
                      setPasswordVisibility(!passwordVisibility);
                    }}
                  />
                ) : (
                  <VisibilityOff
                    onClick={() => {
                      setPasswordVisibility(!passwordVisibility);
                    }}
                  />
                )}
              </InputAdornment>
            ),
          }}
          error={passwordError}
          helperText={passwordError ? "Please enter a password" : ""}
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Button
          size="large"
          variant="outlined"
          endIcon={<LoginIcon />}
          onClick={handleLogin}
        >
          Login
        </Button>
        <Box>
          <Typography variant="subtitle1">
          <Link style={{ textDecoration: "none" }} to="/forgot-password">Forgot Password ?</Link>
          </Typography>
          <Typography variant="subtitle1">
            Don't have an account ?{" "}
            <Typography
              display={"inline"}
              color="primary.main"
              variant="subtitle1"
            >
            <Link style={{ textDecoration: "none" }} to="/signup">Sign Up</Link>
            
            </Typography>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default Login;
