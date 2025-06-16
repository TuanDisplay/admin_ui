import clsx from "clsx";
import { ChevronsUpDown } from "lucide-react";
import UserTableItem from "./TableItems/UserTableItem";
import type { IUserMana } from "~/common/types";

interface IDataTable {
  cols: string[];
  data: IUserMana[];
  userType: "expert-management" | "user-management";
}

const UserTable = ({ cols, data }: IDataTable) => {
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
        {data.map((item, index) => (
          <UserTableItem
            key={index}
            index={index}
            uuid={item.uuid}
            username={item.username}
            // major={item.}
            email={item.username}
          />
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
