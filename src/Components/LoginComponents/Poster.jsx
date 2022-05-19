import React from "react";
import {
  Box,
} from "@mui/material"; 
import img1 from "./utility/img1.jpg";

const Poster = () => {
    return (   
    <Box
        component="img"
        sx={{
          width: [0, 0, 340, 430, 480],
          position: "fixed",
          top: [0, 0, "25vh", "15vh", "14vh"],
          left: [0, 0, "5vw", "5vw", "15vw"],
          borderRadius: "1rem",
        }}
        src={img1}
      /> );
}
 
export default Poster;