import { useQuery } from "@tanstack/react-query";
import { ArrowLeft } from "lucide-react";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { IHisPage } from "~/common/types";
import Button from "~/components/Button";
import PaginationBar from "~/components/PaginationBar";
import LoadingScreen from "~/layouts/component/LoadingScreen";
import * as paymentService from "~/services/payment.service";
import { convertIsoDate } from "~/utils/files";

export default function TransactionHistory() {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { data, isLoading } = useQuery({
    queryKey: ["transactionHistory"],
    queryFn: async (): Promise<IHisPage> => {
      const res = await paymentService.productPaymentHis();
      return res;
    },
  });

  const navigate = useNavigate();

  const itemsData = useMemo(() => {
    return data?.items ? data?.items : [];
  }, [data]);

  return (
    <div className="py-10 max-w-3xl mx-auto ">
      <Button
        onClick={() => navigate(-1)}
        className=" text-sm text-blue-600"
        leftIcon={<ArrowLeft className="w-4 h-4" />}
      >
        Back
      </Button>

      <h1 className="text-2xl font-bold my-4">Transaction history</h1>

      {isLoading ? (
        <LoadingScreen className="!h-[80vh]" />
      ) : (
        <>
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-gray-100 text-left">
                <tr>
                  <th className="px-4 py-2">ID</th>
                  <th className="px-4 py-2">Description</th>
                  <th className="px-4 py-2">Transactor</th>
                  <th className="px-4 py-2">Date</th>
                  <th className="px-4 py-2 text-right">Amount</th>
                </tr>
              </thead>
              <tbody>
                {itemsData.map((tx, index) => (
                  <tr key={index} className="border-t">
                    <td className="px-4 py-2">{index + 1}</td>
                    <td className="px-4 py-2">{tx.description}</td>
                    <td className="px-4 py-2">{tx.customer_name}</td>
                    <td className="px-4 py-2">
                      {convertIsoDate(tx.created_at)}
                    </td>
                    <td
                      className={`px-4 py-2 text-right ${
                        tx.amount < 0 ? "text-red-500" : "text-green-600"
                      }`}
                    >
                      {tx.amount.toLocaleString("vi-VN")}₫
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <PaginationBar
            currentPage={currentPage}
            itemsPerPage={data?.limit ? data?.limit : 0}
            setCurrentPage={setCurrentPage}
            totalItems={data?.total ? data?.total : 0}
          />
        </>
      )}
    </div>
  );
}
