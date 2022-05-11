import React, { useEffect, useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import data from "../data/file.json";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
const MutualFundComponent = (p) => {
  let path = `/mutual-funds/${p.data.id}`;
  console.log(p);
  return (
    <Link style={{ textDecoration: "none" }} to={path}>
      {p.value}
    </Link>
  );
};

const GridTable = () => {
  const [rowData, setRowData] = useState();
  const [columnDefs, setColumnDefs] = useState([
    // using default ColDef
    { field: "id", cellRenderer: MutualFundComponent },
    { field: "name", cellRenderer: MutualFundComponent },
    { field: "total_invested" },
    { field: "current_valuation" },
    { field: "net_profit" },
    { field: "total_installments" },
    { field: "internal_roi" },
    { field: "sip_start_date" },
    { field: "sip_end_date" },
  ]);
  const defaultColDef = useMemo(() => {
    return {
      // set the default column width
      width: 170,
      filter: "agTextColumnFilter",

      resizable: true,
      enableRowGroup: true,
    };
  }, []);

  //  To be used for api call
  //  useEffect((params) => {
  //     fetch("https://www.ag-grid.com/example-assets/olympic-winners.json")
  //       .then((resp) => resp.json())
  //       .then((data) => setRowData(data));
  //   }, []);
  useEffect(() => {
    setRowData(data);
  }, []);
  const divstyle = { boxSizing: "border-box", height: "100%", width: "100%" };
  return (
    <Box
    sx={{
      boxSizing: "border-box",
      borderColor: "primary.light",
      border:1,
      height:['90vh'],
      width:['95vw','95vw','80vw','80vw','80vw'],
      position:"fixed",
      right:['0vh'],
      top:['7vh'],
      margin:["1vh"]

    }}
    >
      <div style={divstyle}>
        <div style={divstyle}>
          <div style={divstyle} className="ag-theme-alpine">
            <AgGridReact
              rowData={rowData}
              columnDefs={columnDefs}
              defaultColDef={defaultColDef}
              paginationAutoPageSize={true}
              pagination={true}
            ></AgGridReact>
          </div>
        </div>
      </div>
    </Box>
  );
};
export default GridTable;
