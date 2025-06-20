import { DonutChart } from "~/components/ChartData";

interface PieChDataProps {
  ideaBuyTotal: number;
  ideaTotal: number;
  proBuyTotal: number;
  proTotal: number;
  premiumUserTotal: number;
  userTotal: number;
}

export default function PieChartData({
  ideaBuyTotal,
  ideaTotal,
  proBuyTotal,
  proTotal,
  premiumUserTotal,
  userTotal,
}: PieChDataProps) {
  return (
    <div className="w-1/2 bg-white py-4 rounded-lg shadow-2xl">
      <div className="font-bold ml-4">Thống kê tổng quan</div>
      <div className="flex justify-around mt-2 h-[180px]">
        <DonutChart
          title="Purchased Idea"
          percentage={Math.round((ideaBuyTotal / ideaTotal) * 100)}
          mainColor="#f44336"
          secondaryColor="#ffe5e5"
        />
        <DonutChart
          title="Resolved Issue"
          percentage={Math.round((proBuyTotal / proTotal) * 100)}
          mainColor="#4caf50"
          secondaryColor="#e6f4e9"
        />
        <DonutChart
          title="Premium User"
          percentage={Math.round((premiumUserTotal / userTotal) * 100)}
          mainColor="#2196f3"
          secondaryColor="#e0f2ff"
        />
      </div>
    </div>
  );
}
