import React, { useEffect, useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import data from "../data/file.json";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

const MutualFundComponent = (p) => {
  let path = `/mutual-funds/${p.data.id}`;
  return (
    <Link
      style={{ textDecoration: "none" }}
      to={{
        pathname: path,
        query: p,
      }}
    >
      {p.value}
    </Link>
  );
};

const GridTable = (props) => {
  const [rowData, setRowData] = useState();
  const [columnDefs, setColumnDefs] = useState([
    // using default ColDef
    {
      headerName: "Fund Id",
      field: "id",
      cellRenderer: MutualFundComponent,
      width: 100,
    },
    {
      headerName: "Mutual Fund",
      field: "name",
      cellRenderer: MutualFundComponent,
      width: 280,
    },
    { headerName: "Plan", field: "plan", width: 100 },
    { headerName: "Sub Category", field: "sub_category", width: 240 },
    { headerName: "Assets Under Management(Cr)", field: "aum", width: 250 },
    { headerName: "Growth Rate", field: "cagr" },
    { headerName: "Expense Ratio", field: "expense_ratio" },
    { headerName: "Risk", field: "sebi_risk", width: 165 },
  ]);

  const defaultColDef = useMemo(() => {
    return {
      // set the default column width
      width: 170,
      filter: "agTextColumnFilter",
      sortable: true,
      resizable: true,
    };
  }, []);

  //  To be used for api call
  //  useEffect((params) => {
  //     fetch("https://www.ag-grid.com/example-assets/olympic-winners.json")
  //       .then((resp) => resp.json())
  //       .then((data) => setRowData(data));
  //   }, []);

  useEffect(() => {
    let filteredData = data;
    if (props.plan != "All")
      filteredData = data.filter((d) => d.plan === props.plan);
    if (props.risk != "All")
      filteredData = data.filter((d) => d.sebi_risk === props.risk);
    if (props.subCategory != "All") {
      if (props.subCategory !== "Other Funds")
        filteredData = data.filter((d) => d.sub_category === props.subCategory);
      else {
        let list = [
          "Arbitrage Fund",
          "Equity Linked Saving Scheme (ELSS)",
          "Large & Mid Cap Fund",
          "Large Cap Fund ",
          "Liquid Fund",
          "Low Duration Fund",
          "Medium Duration Fund",
          "Mid Cap Fund",
          "Small Cap Fund",
        ];
        filteredData = data.filter((d) => !list.includes(d.sub_category));
      }
    }

    setRowData(filteredData);
  }, [props]);
  const divstyle = { boxSizing: "border-box", height: "100%", width: "100%" };
  return (
    <Box
      sx={{
        boxSizing: "border-box",
        borderColor: "primary.light",
        border: 1,
        height: ["90vh"],
        width: ["95vw", "95vw", "80vw", "80vw", "80vw"],
        position: "fixed",
        right: ["0vh"],
        top: ["7vh"],
        margin: ["1vh"],
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
