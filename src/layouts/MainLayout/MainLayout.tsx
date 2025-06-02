import { Outlet } from "react-router-dom";
import Sidebar from "~/layouts/component/Sidebar";
import Header from "~/layouts/component/Header";

export default function MainLayout() {
  return (
    <div className="flex min-h-screen">
      <aside className=" bg-white py-5 shadow-2xl">
        <Sidebar />
      </aside>
      <main className="flex-1 bg-[#F3F2F7]">
        <Header />
        <Outlet />
      </main>
    </div>
  );
}
