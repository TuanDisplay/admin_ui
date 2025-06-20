import clsx from "clsx";
import { FolderKanban, Home, Lightbulb, User, UserCheck } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const sidebarItems = [
  { icon: Home, name: "Thống kê", value: "dashboard", link: "/" },
  { icon: Lightbulb, name: "Ý tưởng", value: "idea", link: "/idea-management" },
  {
    icon: FolderKanban,
    name: "Vấn đề",
    value: "problem",
    link: "/problem-management",
  },
  {
    icon: UserCheck,
    name: "Chuyên gia",
    value: "expert",
    link: "/expert-management",
  },
  { icon: User, name: "Người dùng", value: "user", link: "/user-management" },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <div className="mx-auto max-w-[300px]">
      <div className="px-10 space-y-1">
        <img src="/logo_rm.png" alt="logo" className="h-8" />
        <div className="text-xs text-skyBlue-900 ml-2">
          Kết nối ý tưởng, kiến tạo tương lai!
        </div>
      </div>
      <div className="mr-20 space-y-2 mt-20 ">
        {sidebarItems.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.value}
              className={clsx("", {
                "border-l-3 border-LGreen-500": item.link === location.pathname,
              })}
            >
              <Link
                to={item.link}
                className={clsx(
                  "flex items-center gap-2 py-2 ml-10 opacity-50 rounded-xl w-[200px] pl-2 cursor-pointer",
                  {
                    "text-[#00B074] bg-[#D9F3EA] opacity-100 border-LGreen-500 border-1 duration-300":
                      item.link === location.pathname,
                  }
                )}
              >
                <Icon size={20} />
                <div className="font-bold">{item.name}</div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
