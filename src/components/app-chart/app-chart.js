import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

import "./app-chart.css";
import Card from "../../ui/Card/Card";

const Chart = () => {
  const [dataChart, setDataChart] = useState({
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    datasets: [
      {
        label: "My First dataset",
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
        data: [65, 59, 80, 81, 56, 55, 40],
      },
      {
        label: "My second dataset",
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
        data: [50, 44, 95, 60, 33, 20, 21],
      },
    ],
  });

  useEffect(() => {
    const data0  = Object.assign({...dataChart.datasets[0], label: "asd"});
    const data1 = Object.assign({...dataChart.datasets[1], label: "das"});
    const datasum = [data0,data1]
    console.log(datasum);
    setDataChart(Object.assign({...dataChart, datasets: datasum}))
  }, []);

  return (
    <Card className="chart card--light">
      <Line data={dataChart} />
    </Card>
  );
};

export default Chart;
