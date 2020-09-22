import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { Line } from "react-chartjs-2";

import "./app-chart.css";
import Card from "../../ui/Card/Card";
import { getRatesFullCurrentMonth } from '../../services'

const Chart = ({baseRate, secondaryRates}) => {
  const [dataChart, setDataChart] = useState({
    labels: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
      11, 12, 13, 14, 15, 16,17,18,19,
      20,21,22,23,24,25,26,27,28,29,30,31
    ],
    datasets: [
      {
        label: `${baseRate} / ${secondaryRates[0]}`,
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [],
      },
      {
        label: `${baseRate} / ${secondaryRates[1]}`,
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(192,75,192,0.4)",
        borderColor: "rgba(192,75,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(192,75,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(192,75,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [],
      },
      {
        label: `${baseRate} / ${secondaryRates[2]}`,
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(22, 94, 226,0.4)",
        borderColor: "rgba(22, 94, 226,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(22, 94, 226,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(22, 94, 226,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [],
      },
      {
        label: `${baseRate} / ${secondaryRates[3]}`,
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(250, 84, 23,0.4)",
        borderColor: "rgba(250, 84, 23,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(250, 84, 23,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(250, 84, 23,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [],
      },
    ],
  });

  useEffect(() => {
    const fetchRates = async () => {
      const data = await getRatesFullCurrentMonth(baseRate, secondaryRates);
      
      const firstRateData  = Object.assign({...dataChart.datasets[0], label: `${baseRate} / ${secondaryRates[0]}`, data: data[0]});
      const secondRateData = Object.assign({...dataChart.datasets[1], label: `${baseRate} / ${secondaryRates[1]}`, data: data[1]});
      const thirdRateData = Object.assign({...dataChart.datasets[2], label: `${baseRate} / ${secondaryRates[2]}`, data: data[2]});
      const fourRateData = Object.assign({...dataChart.datasets[3], label: `${baseRate} / ${secondaryRates[3]}`, data: data[3]});
      const datasum = [firstRateData,secondRateData,thirdRateData,fourRateData]
      setDataChart(Object.assign({...dataChart, datasets: datasum}))
    }
    fetchRates();

  }, [baseRate,secondaryRates]);

  return (
    <Card className="chart card--light">
      <Line data={dataChart} options={{ maintainAspectRatio: false }}/>
    </Card>
  );
};

const mapStateToProps = state => {
  return {
    baseRate: state.rates.baseRate,
    secondaryRates: state.rates.secondaryRates
  }
}

export default connect(mapStateToProps)(Chart);
