import { History, LogOut } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="h-[60px] shadow-2xl border-b-1 flex items-center justify-end">
      <div className="flex gap-10 mr-10">
        <div className="flex gap-3">
          <Link
            to={"/transaction-history"}
            title="Transaction history"
            className="bg-[#D5E5F3] p-2.5 cursor-pointer rounded-lg group"
          >
            <History className="text-[#2D9CDB] group-hover:text-blue-300 duration-300" />
          </Link>
          <div
            title="Log out"
            className="bg-[#F5DCE0] p-2.5 cursor-pointer rounded-lg group"
          >
            <LogOut className="text-[#FF5B5B] group-hover:text-red-300 duration-300" />
          </div>
        </div>
        <div className="w-[1px] my-2 bg-black"></div>
        <div className="flex gap-2 items-center">
          <div>
            <span>Xin chào, </span>
            <span className="font-bold">Admin </span>
          </div>
          <div className="rounded-full h-10 w-10 overflow-hidden">
            <img src="/no-user.png" alt="avatar" className="object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}
