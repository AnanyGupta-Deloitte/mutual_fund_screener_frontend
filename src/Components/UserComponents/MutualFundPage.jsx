import { useParams } from "react-router-dom";
import React, { useState, useMemo, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const MutualFundPage = (props) => {
  const [historicData, setHistoricData] = useState([]);
  const [mfDetails, setMFDetails] = useState({});
  const [date,setDate] = useState([]);
  const [nav,setNav] = useState([]);
  let obj = useParams();

  useEffect(() => {
      fetch(`https://api.mfapi.in/mf/${obj.id}`)
      .then((resp) => resp.json())
      .then((data) => {
          let filterData = data["data"]
          filterData = filterData.slice(0,50);
          setHistoricData(filterData);
          const dateArr = filterData.map(i => i.date);

          const navArr = filterData.map(i => i.nav);
          setDate(dateArr);
          setNav(navArr);
         setMFDetails(props.location.query.data)
        })
    }, []);
    const data = {
        labels: date,
        datasets: [{
          label:"Nav value",
          data: nav,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
          ],
          borderColor: [
            'rgba(0, 0, 132, 1)',
          ],
          borderWidth: 2
        }]
      };
    const  options = {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          legend: {
            position: 'Top',
          },
          title: {
            display: true,
            text: `Nav Data for ${mfDetails.name}`
          },
        },
    }
  return (
      <>
      <h1>
        {mfDetails.name}
      </h1>
      <h1>
        {mfDetails.sub_category}
      </h1>
      <h1>
        {mfDetails.plan}
      </h1>
      <h1>
        {mfDetails.aum}
      </h1>
      <h1>
        {mfDetails.cagr}
      </h1>
      <h1>
        {mfDetails.expense_ratio}
      </h1>
      <h1>
        {mfDetails.sebi_risk}
      </h1>

    <div>
      <Line data={data} height={500} width={500} options={options} />
      </div>
      </>
    
  );
};

export default MutualFundPage;
