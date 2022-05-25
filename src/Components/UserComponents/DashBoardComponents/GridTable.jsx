import React, { useEffect, useMemo, useState, useContext } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import { AuthContext } from "../../ContextApi/AuthProvider";
const MutualFundComponent = (p) => {
  let { user } = useContext(AuthContext);
  let path = `/mutualfunds/${p.data.id}`;
  if (!user) path = "/login";

  return (
    <Link
      style={{ textDecoration: "none", color: "blue" }}
      to={{
        pathname: path,
      }}
    >
      {p.value}
    </Link>
  );
};

const GridTable = (props) => {
  const [rowData, setRowData] = useState();
  const columnDefs = [
    {
      headerName: "Fund Id",
      field: "id",
      filter: "agTextColumnFilter",
      floatingFilter: true,
      cellRenderer: MutualFundComponent,
      width: 100,
    },
    {
      headerName: "Mutual Fund",
      field: "name",
      filter: "agTextColumnFilter",
      floatingFilter: true,
      cellRenderer: MutualFundComponent,
      width: 280,
    },
    { headerName: "Plan", field: "plan", width: 100 },
    { headerName: "Sub Category", field: "sub_category", width: 240 },
    {
      headerName: "Assets Under Management(Cr)",
      field: "aum",
      width: 250,
      valueFormatter: (params) => params.data.aum.toFixed(2),
      headerTooltip:
        `AUM is the total market value of the investments that a person or entity manages on behalf of clients.`,
    },
    {
      headerName: "Growth Rate",
      field: "cagr",
      valueFormatter: (params) => params.data.cagr.toFixed(2),
      headerTooltip: "The growth rate is the rate of return required for an investment to grow from its beginning balance to its ending balance when interest is compounded.",
      maxWidth:'200'
    },
    {
      headerName: "Expense Ratio",
      field: "expense_ratio",
      valueFormatter: (params) => params.data.expense_ratio?.toFixed(2),
      headerTooltip: "The % amount that the Mutual Fund manager takes as a fee for their service",
    },
    {
      headerName: "Risk",
      field: "sebi_risk",
      width: 165,
      headerTooltip: "It is the risk of change in the Net Asset Value of a Mutual Fund ",
    },
  ];

  const defaultColDef = useMemo(() => {
    return {
      // set the default column width
      width: 170,
      sortable: true,
      resizable: true,
    };
  }, []);

  useEffect(() => {
    fetch(
      "https://mutual-fund-screener-backend-urtjok3rza-wl.a.run.app/mutual-fund/all-mutual-funds"
    )
      .then((resp) => resp.json())
      .then((data) => {
        // console.log(data)
        let filteredData = data;
        if (props.plan !== "All")
          filteredData = filteredData.filter((d) => d.plan === props.plan);
        if (props.risk !== "All")
          filteredData = filteredData.filter((d) => d.sebi_risk === props.risk);
        if (props.subCategory !== "All") {
          if (props.subCategory !== "Other Funds")
            filteredData = filteredData.filter(
              (d) => d.sub_category === props.subCategory
            );
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
            filteredData = filteredData.filter(
              (d) => !list.includes(d.sub_category)
            );
          }
        }
        setRowData(filteredData);
      });
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
              tooltipShowDelay={300}
            ></AgGridReact>
          </div>
        </div>
      </div>
    </Box>
  );
};
export default GridTable;
