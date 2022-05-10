import React, { useContext, useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import LoginIcon from "@mui/icons-material/Login";
import {
  TextField,
  Box,
  Button,
  Typography,
  makeStyles,
  InputAdornment,
  Link,
  Container,
} from "@mui/material";
import img1 from "../utility/img1.jpg"
import { margin, padding } from "@mui/system";

let Login = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    console.log(emailId);
    console.log(password);
    setEmailId("");
    setPassword("");
  };
  return (
      <Box
        sx={{
          boxSizing:'border-box',
          margin:'0',
          padding:'0',

          width: "100vw",
          height: '100vh',
        }}
      
      >
          <Box
        component="img"
        sx={{
          width: [null, null,null, null, 480],
          position:"fixed",
          top:'15vh',
          left: [0, 0, '15vw'],
          borderRadius:'1rem'
        }}
        src={img1}
      />
      <Box
        sx={{
          width: ['75vw', '62.5vw','50vw', '37.5vw', '25vw'],
          height:"50vh",
          border: 1,
          borderRadius: '1vw',
          borderColor: "primary.main",
          padding: 10,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          position:"fixed",
          top:'20vh',
          right: [0, '8.75vw','17.5vw', '25.25vw', '15vw'],

        }}
      >
        <TextField
          required
          id="standard-required"
          label="Email Id"
          variant="standard"
          value={emailId}
          onChange={(e) => setEmailId(e.target.value)}
        />
        <TextField
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
          <Link variant="subtitle1">Forgot Password ?</Link>
          <Typography variant="subtitle1">
            Don't have an account ?{" "}
            <Typography
              display={"inline"}
              color="primary.main"
              variant="subtitle1"
            >
              SignUp
            </Typography>
          </Typography>
        </Box>
      </Box>

      </Box>

  );
};
export default Login;
