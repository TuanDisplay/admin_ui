import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

const LineChart: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;
    const chart = echarts.init(chartRef.current);

    const option: echarts.EChartsOption = {
      tooltip: {
        trigger: "axis",
      },
      legend: {
        data: ["Ideas", "Problems", "Experts", "Revenue"],
        top: 20,
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "10%",
        containLabel: true,
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: ["Q1", "Q2", "Q3", "Q4"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          name: "Ideas",
          type: "line",
          data: [120, 200, 150, 300],
          smooth: true,
          lineStyle: { color: "#f44336" },
        },
        {
          name: "Problems",
          type: "line",
          data: [60, 80, 90, 100],
          smooth: true,
          lineStyle: { color: "#4caf50" },
        },
        {
          name: "Experts",
          type: "line",
          data: [30, 45, 60, 80],
          smooth: true,
          lineStyle: { color: "#ff9800" },
        },
        {
          name: "Revenue",
          type: "line",
          data: [10, 20, 30, 50],
          smooth: true,
          lineStyle: { color: "#2196f3" },
        },
      ],
    };

    chart.setOption(option);

    return () => {
      chart.dispose();
    };
  }, []);

  return <div ref={chartRef} style={{ width: "100%", height: "100%" }} />;
};

export default LineChart;
