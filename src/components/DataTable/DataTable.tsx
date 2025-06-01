import clsx from "clsx";
import { ChevronsUpDown, FileText } from "lucide-react";
import { useState } from "react";
import Button from "~/components/Button";

const data = [
  {
    title: "Chế tạo kệ bằng nhạc cụ từ các nhạc phẩm tái chế ",
    author: "Nguyễn Anh Huy",
    visible: "yes",
    lastUpdate: "Jul 13. 2013 at 3:38 AM",
    actions: "actions",
  },
  {
    title: "Chế tạo kệ bằng nhạc cụ từ các nhạc phẩm tái chế ",
    author: "Nguyễn Anh Huy",
    visible: "yes",
    lastUpdate: "Jul 13. 2013 at 3:38 AM",
    actions: "actions",
  },
  {
    title: "Chế tạo kệ bằng nhạc cụ từ các nhạc phẩm tái chế ",
    author: "Nguyễn Anh Huy",
    visible: "yes",
    lastUpdate: "Jul 13. 2013 at 3:38 AM",
    actions: "actions",
  },
  {
    title: "Chế tạo kệ bằng nhạc cụ từ các nhạc phẩm tái chế ",
    author: "Nguyễn Anh Huy",
    visible: "yes",
    lastUpdate: "Jul 13. 2013 at 3:38 AM",
    actions: "actions",
  },
];

const className = "px-4 py-2 text-nowrap";

const DataTable = () => {
  const [isVisible, setVisible] = useState<boolean>(true);

  const cols = ["stt", "title", "author", "visible", "last update", "actions"];

  return (
    <div className="overflow-x-auto w-full border border-gray-300 h-[65vh] overflow-y-auto ">
      <table className="">
        <thead className="bg-gray-100 border-b-2">
          <tr>
            {cols.map((col, index) => {
              return (
                <th
                  key={index}
                  className="p-4 capitalize text-left font-normal text-base"
                >
                  <div
                    className={clsx("flex items-center justify-between", {
                      "justify-center": col == "actions",
                    })}
                  >
                    {col}
                    {col !== "actions" && <ChevronsUpDown size={16} />}
                  </div>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              className={clsx("hover:bg-gray-50 border-b-1", {
                "bg-white": index % 2 === 0,
              })}
            >
              <td className={clsx(className)}>{index + 1}</td>
              <td className={clsx("flex gap-2 items-center mt-2", className)}>
                <FileText size={16} />
                <div className="text-[#66A1D4]">{item.title}</div>
              </td>
              <td className={clsx("", className)}>{item.author}</td>
              <td className={clsx("text-center", className)}>
                {isVisible ? (
                  <Button
                    className="py-1.5 px-3"
                    confirm
                    onClick={() => setVisible(false)}
                  >
                    Yes
                  </Button>
                ) : (
                  <Button
                    className="py-1.5 px-4"
                    cancel
                    onClick={() => setVisible(true)}
                  >
                    No
                  </Button>
                )}
              </td>
              <td className={clsx("", className)}>{item.lastUpdate}</td>
              <td className={clsx("flex gap-2", className)}>
                <Button className="px-2 py-1.5" confirm>
                  Confirm
                </Button>
                <div className="w-[1px] my-2 bg-black"></div>
                <Button className="px-3 py-1.5" cancel>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
