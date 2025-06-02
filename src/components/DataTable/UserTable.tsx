import clsx from "clsx";
import { ChevronsUpDown } from "lucide-react";
import { dataUser } from "~/common/data";
import { UserTable } from "./TableItems";

interface IDataTable {
  cols: string[];
  userType: "expert-management" | "user-management";
}

const DataTable = ({ cols }: IDataTable) => {
  return (
    <table className="w-full">
      <thead className="bg-gray-100 border-b-2">
        <tr>
          {cols.map((col, index) => {
            return (
              <th
                key={index}
                className="p-2 capitalize text-left font-normal text-sm"
              >
                <div
                  className={clsx("flex items-center justify-between", {
                    "ml-2": col == "actions" || col == "visible",
                  })}
                >
                  {col}
                  {col !== "actions" && col !== "visible" && (
                    <ChevronsUpDown size={16} />
                  )}
                </div>
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {dataUser.map((item, index) => (
          <UserTable
            index={index}
            uuid={item.id}
            username={item.name}
            // major={item.}
            email={item.email}
          />
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
