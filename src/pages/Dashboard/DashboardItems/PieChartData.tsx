import { DonutChart } from "~/components/ChartData";

export default function PieChartData() {
  return (
    <div className="w-1/2 bg-white py-4 rounded-lg shadow-2xl">
      <div className="font-bold ml-4">Pie Chart</div>
      <div className="flex justify-around mt-2 h-[180px]">
        <DonutChart
          title="Purchased Idea"
          percentage={81}
          mainColor="#f44336"
          secondaryColor="#ffe5e5"
        />
        <DonutChart
          title="Resolved Issue"
          percentage={22}
          mainColor="#4caf50"
          secondaryColor="#e6f4e9"
        />
        <DonutChart
          title="Premium User"
          percentage={62}
          mainColor="#2196f3"
          secondaryColor="#e0f2ff"
        />
      </div>
    </div>
  );
}
