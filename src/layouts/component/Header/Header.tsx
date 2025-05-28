import { BellRing, LogOut, MessageCircleMore } from "lucide-react";

export default function Header() {
  return (
    <div className="h-[60px] shadow-2xl border-b-2 flex items-center justify-end">
      <div className="flex gap-10 mr-10">
        <div className="flex gap-3">
          <div className="bg-[#D5E5F3] p-2.5 cursor-pointer rounded-lg">
            <BellRing className="text-[#2D9CDB]" />
          </div>
          <div className="bg-[#D5E5F3] p-2.5 cursor-pointer rounded-lg">
            <MessageCircleMore className="text-[#2D9CDB]" />
          </div>
          <div className="bg-[#F5DCE0] p-2.5 cursor-pointer rounded-lg">
            <LogOut className="text-[#FF5B5B]" />
          </div>
        </div>
        <div className="w-[1px] my-2 bg-black"></div>
        <div className="flex gap-2 items-center">
          <div>
            <span>Xin chào, </span>
            <span className="font-bold">Viết Tuấn </span>
          </div>
          <div className="rounded-full h-10 w-10 overflow-hidden">
            <img src="/AvtTuan.jpg" alt="avatar" className="object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}
