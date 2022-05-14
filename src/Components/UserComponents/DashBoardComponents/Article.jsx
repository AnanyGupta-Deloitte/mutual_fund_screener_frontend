import React, { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import GridTable from "./GridTable";
import Navbar from "./Navbar";
import { Divider, Typography, IconButton } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from "@mui/icons-material/Close";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import PlanFilter from "./Filters/PlanFilter";
import SubCategoryFilter from "./Filters/SubCategoryFilter";
import RiskFilter from "./Filters/RiskFilter";
const drawerWidth = "18vw";
const Filters = () => {
  const [plan, setPlan] = useState("All");
  const [risk, setRisk] = useState("All");
  const [subCategory, setSubCategory] = useState("All");
  const [isSCFilterVisible, setIsSCFilterVisible] = useState(false);
  const [isPlanFilterVisible, setIsPlanFilterVisible] = useState(false);
  const [isRiskFilterVisible, setIsRiskFilterVisible] = useState(false);
  return (
    <Box sx={{ display: "flex" }}>
     
      <AppBar
        position="fixed"
      >
        <Navbar />
      </AppBar>
      
      <Box
        variant="permanent"
        sx={{
          overflow:"auto",
          boxSizing: "border-box",
          borderColor: "primary.main",
          border: 1,
          height: ["90vh"],
          width: [0, 0, "18vw", "18vw", "18vw"],
          position: "fixed",
          left: ["0vh"],
          top: ["7vh"],
          margin: ["1vh"],
        }}
      > 
        <Box
          sx={{
            overflow:"auto",
            display: "flex",
            flexDirection: "column",
            margin: ["1vh"],
          }}
        >
          <Typography variant="h5" color={"primary.main"}>
            {" "}
            FILTERS <FilterAltIcon />
          </Typography>
          <Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography variant="h6" color="primary.main">
                Plans
              </Typography>
                <IconButton onClick={()=>{
                    setIsPlanFilterVisible(!isPlanFilterVisible)
                }}>
                  {isPlanFilterVisible ? <CloseIcon /> : <AddIcon />}
                </IconButton>
            </Box>
            {isPlanFilterVisible ? <PlanFilter setPlan={setPlan} /> : ""}
       
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography variant="h6" color="primary.main">
              Sub Category
              </Typography>
                <IconButton onClick={()=>{
                    setIsSCFilterVisible(!isSCFilterVisible)
                }}>
                  {isSCFilterVisible ? <CloseIcon /> : <AddIcon />}
                </IconButton>
            </Box>
            {isSCFilterVisible ? <SubCategoryFilter setSubCategory={setSubCategory} /> : ""}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography variant="h6" color="primary.main">
              Risk
              </Typography>
                <IconButton onClick={()=>{
                    setIsRiskFilterVisible(!isRiskFilterVisible)
                }}>
                  {isRiskFilterVisible ? <CloseIcon /> : <AddIcon />}
                </IconButton>
            </Box>
            {isRiskFilterVisible ? <RiskFilter setRisk={setRisk}/>:"" }
          </Box>
        </Box>
      </Box>

      <GridTable plan={plan} subCategory={subCategory} risk={risk}></GridTable>
    </Box>
  );
};
export default Filters;
