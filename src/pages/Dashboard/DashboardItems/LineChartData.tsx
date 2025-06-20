import { LineChart } from "~/components/ChartData";

export default function LineChartData() {
  return (
    <div className="bg-white py-4 rounded-lg shadow-2xl w-1/2">
      <div className="font-bold ml-4">
        Tăng trưởng chỉ số hoạt động theo quý
      </div>
      <LineChart />
    </div>
  );
}
