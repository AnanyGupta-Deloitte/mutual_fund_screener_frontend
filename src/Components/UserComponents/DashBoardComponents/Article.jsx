import * as React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import GridTable from "./GridTable";
import Navbar from "./Navbar";
import { Divider, Typography } from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
const drawerWidth = "18vw";
const Filters = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Navbar />
      </AppBar>
      <Box
        variant="permanent"
        sx={{
          boxSizing: "border-box",
          borderColor: "primary.main",
          border: 1,
          height: ["90vh"],
          width: [0,0,"18vw","18vw","18vw"],
          position: "fixed",
          left: ["0vh"],
          top: ["7vh"],
          margin: ["1vh"],
        }}
      >
        <Toolbar />
        <Box
          sx={{
            overflow: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            
          }}
        >
          <Typography variant="h4" color={"primary.main"}> FILTERS {" "} <FilterAltIcon/></Typography>
          <Box
            sx={{
              borderColor: "primary.main",
              marginTop: "3vh",
              marginBottom: "3vh",
              borderTop: 1,
              borderBottom: 1,
              width: [0,0,"16vw","16vw","16vw"],
              paddingTop: "4vh",
              paddingBottom: "4vh",
            }}
          >
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label"> <Typography variant="h6" color={"primary.main"}> Category</Typography></FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="All"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="All"
                  control={<Radio />}
                  label="All"
                />
                <FormControlLabel
                  value="Commodity"
                  control={<Radio />}
                  label="Commodity"
                />
                <FormControlLabel
                  value="Equity"
                  control={<Radio />}
                  label="Equity"
                />
              </RadioGroup>
            </FormControl>
          </Box>
        </Box>
      </Box>
      <GridTable></GridTable>
    </Box>
  );
};
export default Filters;
