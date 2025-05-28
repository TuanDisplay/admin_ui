import { Outlet } from "react-router-dom";
import Sidebar from "~/layouts/component/Sidebar";
import Header from "~/layouts/component/Header";

export default function MainLayout() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 h-screen bg-[#F3F2F7]">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}
