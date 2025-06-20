import { useQuery } from "@tanstack/react-query";
import LineChartData from "./DashboardItems/LineChartData";
import PieChartData from "./DashboardItems/PieChartData";
import QuickData from "./DashboardItems/QuickData";
import * as productService from "~/services/product.service";
import * as userService from "~/services/user.service";
import * as paymentService from "~/services/payment.service";
import { useMemo } from "react";
import { convertCurrencyVN } from "~/utils/files";

interface IdeaCount {
  total: number;
  total_ideas_bought: number;
}

interface ProblemCount {
  total: number;
  total_problem_bought: number;
}

interface ExpertCount {
  total: number;
}

interface UserCount {
  total: number;
  total_premium: number;
}

interface Revenue {
  total_amount: number;
}

export default function Dashboard() {
  const { data: ideaCountData } = useQuery({
    queryKey: ["ideaCountData"],
    queryFn: async (): Promise<IdeaCount> => {
      const res = await productService.totalIdeas();
      return res.data;
    },
  });

  const { data: problemCountData } = useQuery({
    queryKey: ["problemCountData"],
    queryFn: async (): Promise<ProblemCount> => {
      const res = await productService.totalProblems();
      return res.data;
    },
  });

  const { data: expertCountData } = useQuery({
    queryKey: ["expertCountData"],
    queryFn: async (): Promise<ExpertCount> => {
      const res = await userService.totalExpert();
      return res.data;
    },
  });

  const { data: userCountData } = useQuery({
    queryKey: ["userCountData"],
    queryFn: async (): Promise<UserCount> => {
      const res = await userService.totalUser();
      return res.data;
    },
  });

  const { data: revenue } = useQuery({
    queryKey: ["revenue"],
    queryFn: async (): Promise<Revenue> => {
      const res = await paymentService.revenue();
      return res.data;
    },
  });

  const quicklyData = useMemo(() => {
    return [
      {
        imageIcon: "/quickDataImage/Icon1.png",
        quickdata: ideaCountData?.total,
        name: "Total Ideas",
      },
      {
        imageIcon: "/quickDataImage/Icon2.png",
        quickdata: problemCountData?.total,
        name: "Total Problems",
      },
      {
        imageIcon: "/quickDataImage/Icon3.png",
        quickdata: expertCountData?.total,
        name: "Total Experts",
      },
      {
        imageIcon: "/quickDataImage/Icon4.png",
        quickdata: userCountData?.total,
        name: "Total Users",
      },
    ];
  }, [ideaCountData, problemCountData, expertCountData, userCountData]);

  return (
    <div className="mx-auto max-w-5xl py-10">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-semibold text-xl">Dashboard</h1>
          <p className="font-medium text-xs opacity-50">
            Hi, Admin. Chào mừng quay lại I-Match.
          </p>
        </div>
        <div className="h-fit">
          <span className="font-semibold">Doanh thu: </span>{" "}
          {convertCurrencyVN(revenue?.total_amount ? revenue?.total_amount : 0)}
        </div>
      </div>
      <div className="mt-10">
        <div className="flex justify-between">
          {quicklyData.map((data, index) => {
            return (
              <QuickData
                key={index}
                imgIcon={data.imageIcon}
                quickData={data.quickdata ? data.quickdata : 0}
                name={data.name}
              />
            );
          })}
        </div>
      </div>
      <div className="flex gap-10 mt-20 ">
        <PieChartData
          ideaBuyTotal={
            ideaCountData?.total_ideas_bought
              ? ideaCountData?.total_ideas_bought
              : 0
          }
          ideaTotal={ideaCountData?.total ? ideaCountData?.total : 0}
          proBuyTotal={
            problemCountData?.total_problem_bought
              ? problemCountData?.total_problem_bought
              : 0
          }
          proTotal={problemCountData?.total ? problemCountData?.total : 0}
          premiumUserTotal={
            userCountData?.total_premium ? userCountData?.total_premium : 0
          }
          userTotal={userCountData?.total ? userCountData?.total : 0}
        />
        <LineChartData />
      </div>
    </div>
  );
}
