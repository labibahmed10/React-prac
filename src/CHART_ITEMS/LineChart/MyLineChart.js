import React from "react";
import { Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

const MyLineChart = () => {
  const data = [
    {
      name: "Customer A",
      Price: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Customer B",
      Price: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Customer C",
      Price: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Customer D",
      Price: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Customer E",
      Price: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Customer F",
      Price: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Customer G",
      Price: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <LineChart className="mt-10 mx-auto" width={500} height={450} data={data}>
      <Line dataKey={"Price"}></Line>
      <Line dataKey={"amt"}></Line>
      <XAxis dataKey={"name"}></XAxis>
      <YAxis dataKey={"Price"}></YAxis>
      <Tooltip></Tooltip>
    </LineChart>
  );
};

export default MyLineChart;
