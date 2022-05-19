import React, { useState } from 'react';
import {Link } from "react-router-dom";

import {
  TextField,
  Box,
  Button,
  Typography,
} from "@mui/material";
import Poster from './Poster';
import { SendOutlined } from "@mui/icons-material";

const ForgotPassword = () => {
    const [emailId, setEmailId] = useState("");
    const [emailIdError, setEmailIdError] = useState(false);
    const sendRestLink= () =>{
        console.log(emailId)
        if (!emailId) {
            setEmailIdError(true);
        } else {
            setEmailIdError(false);
        }
    }
    return (
        <Box
        sx={{
          boxSizing: "border-box",
          margin: "0",
          padding: "0",
  
          width: "100vw",
          height: "100vh",
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
            Forgot Password
          </Typography>
          <TextField
            required
            id="standard-required"
            label="Email Id"
            variant="standard"
            value={emailId}
            error={emailIdError}
            helperText={emailIdError ? "Please enter a valid email id" : ""}
            onChange={(e) => {
              setEmailId(e.target.value);
            }}
          />
          
          <Button
            size="large"
            variant="outlined"
            endIcon={<SendOutlined />}
            onClick={sendRestLink}
          >
            Send Reset Password Link
          </Button>
          <Typography variant="subtitle1">
            Changed Password ?{" "}
            <Link  style={{ textDecoration: "none" }} to="/login"> Login</Link>
          </Typography>
        </Box>

      </Box>
      );
}
 
export default ForgotPassword;