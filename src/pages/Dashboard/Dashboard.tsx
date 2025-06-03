import LineChartData from "./DashboardItems/LineChartData";
import PieChartData from "./DashboardItems/PieChartData";
import QuickData from "./DashboardItems/QuickData";

const quicklyData = [
  {
    imageIcon: "/quickDataImage/Icon1.png",
    quickdata: 80,
    name: "Total Ideas",
  },
  {
    imageIcon: "/quickDataImage/Icon2.png",
    quickdata: 80,
    name: "Total Problems",
  },
  {
    imageIcon: "/quickDataImage/Icon3.png",
    quickdata: 80,
    name: "Total Experts",
  },
  {
    imageIcon: "/quickDataImage/Icon4.png",
    quickdata: 80,
    name: "Total Users",
  },
];

export default function Dashboard() {
  return (
    <div className="mx-auto max-w-5xl py-10">
      <div>
        <h1 className="font-semibold text-xl">Dashboard</h1>
        <p className="font-medium text-xs opacity-50">
          Hi, Tuấn. Chào mừng quay lại I-Match Admin!
        </p>
      </div>
      <div className="mt-10">
        <div className="flex justify-between">
          {quicklyData.map((data, index) => {
            return (
              <QuickData
                key={index}
                imgIcon={data.imageIcon}
                quickData={data.quickdata}
                name={data.name}
              />
            );
          })}
        </div>
      </div>
      <div className="flex gap-10 mt-20 ">
        <PieChartData />
        <LineChartData />
      </div>
    </div>
  );
}
