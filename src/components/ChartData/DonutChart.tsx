import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

interface DonutChartProps {
  title: string;
  percentage: number;
  mainColor: string;
  secondaryColor: string;
}

const DonutChart: React.FC<DonutChartProps> = ({
  title,
  percentage,
  mainColor,
  secondaryColor,
}) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;
    const chart = echarts.init(chartRef.current);

    chart.setOption({
      title: {
        text: title,
        left: "center",
        top: "bottom",
        textStyle: {
          fontSize: 16,
          font: 600,
        },
      },
      series: [
        {
          type: "pie",
          radius: ["60%", "100%"],
          height: 120,
          top: 25,
          data: [
            {
              value: percentage,
              name: "Completed",
              itemStyle: { color: mainColor },
            },
            {
              value: 100 - percentage,
              name: "Remaining",
              itemStyle: { color: secondaryColor },
            },
          ],
          label: {
            position: "center",
            formatter: `${percentage}%`,
            fontSize: 18,
            fontWeight: "bold",
          },
          labelLine: { show: false },
        },
      ],
    });

    return () => {
      chart.dispose();
    };
  }, [percentage, mainColor, secondaryColor, title]);

  return <div ref={chartRef} style={{ width: "100%", height: "100%" }} />;
};

export default DonutChart;
