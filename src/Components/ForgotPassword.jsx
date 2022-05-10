import React, { useState } from 'react';
import {
  TextField,
  Box,
  Button,
  Typography,
} from "@mui/material";
import img1 from "../utility/img1.jpg";
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
        <Box
          component="img"
          sx={{
            width: [0, 0, 340, 430, 480],
            position: "fixed",
            top: [0, 0, '25vh', '15vh', '14vh'],
            left: [0,0,"5vw", "5vw", "15vw"],
            borderRadius: "1rem",
          }}
          src={img1}
        />
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
          
        </Box>

      </Box>
      );
}
 
export default ForgotPassword;