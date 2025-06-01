import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "~/components/Button";
import PaginationBar from "~/components/PaginationBar";

const transactions = [
  {
    id: 1,
    date: "2025-05-30",
    description: "Mua hàng Shopee",
    transactor: "Tuan",
    amount: -150000,
  },
  {
    id: 2,
    date: "2025-05-28",
    description: "Nhận lương",
    transactor: "Tuan",
    amount: 10000000,
  },
  {
    id: 3,
    date: "2025-05-25",
    description: "Mua trà sữa",
    transactor: "Tuan",
    amount: -45000,
  },
  {
    id: 1,
    date: "2025-05-30",
    description: "Mua hàng Shopee",
    transactor: "Tuan",
    amount: -150000,
  },
  {
    id: 2,
    date: "2025-05-28",
    description: "Nhận lương",
    transactor: "Tuan",
    amount: 10000000,
  },
  {
    id: 3,
    date: "2025-05-25",
    description: "Mua trà sữa",
    transactor: "Tuan",
    amount: -45000,
  },
  {
    id: 1,
    date: "2025-05-30",
    description: "Mua hàng Shopee",
    transactor: "Tuan",
    amount: -150000,
  },
  {
    id: 2,
    date: "2025-05-28",
    description: "Nhận lương",
    transactor: "Tuan",
    amount: 10000000,
  },
  {
    id: 3,
    date: "2025-05-25",
    description: "Mua trà sữa",
    transactor: "Tuan",
    amount: -45000,
  },
  {
    id: 3,
    date: "2025-05-25",
    description: "Mua trà sữa",
    transactor: "Tuan",
    amount: -45000,
  },
];

export default function TransactionHistory() {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const navigate = useNavigate();

  return (
    <div className="py-10 max-w-3xl mx-auto ">
      {/* Nút Back */}
      <Button
        onClick={() => navigate(-1)}
        className=" text-sm text-blue-600"
        leftIcon={<ArrowLeft className="w-4 h-4" />}
      >
        Back
      </Button>

      {/* Tiêu đề */}
      <h1 className="text-2xl font-bold my-4">Transaction history</h1>

      {/* Bảng giao dịch */}
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
            {transactions.map((tx) => (
              <tr key={tx.id} className="border-t">
                <td className="px-4 py-2">{tx.id}</td>
                <td className="px-4 py-2">{tx.description}</td>
                <td className="px-4 py-2">{tx.transactor}</td>
                <td className="px-4 py-2">{tx.date}</td>
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
        itemsPerPage={3}
        setCurrentPage={setCurrentPage}
        totalItems={8}
      />
    </div>
  );
}
