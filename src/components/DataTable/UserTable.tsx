import clsx from "clsx";
import { ChevronsUpDown } from "lucide-react";
import UserTableItem from "./TableItems/UserTableItem";
import type { IUserMana } from "~/common/types";

interface IDataTable {
  cols: string[];
  data: IUserMana[];
  userType: "expert-management" | "user-management";
}

const UserTable = ({ cols, data, userType }: IDataTable) => {
  return (
    <table className="w-full">
      <thead className="bg-gray-100 border-b-2 text-nowrap">
        <tr>
          {cols.map((col, index) => {
            return (
              <th
                key={index}
                className="p-2 capitalize text-left font-normal text-sm"
              >
                <div
                  className={clsx("flex items-center justify-between", {
                    "ml-2": col == "actions" || col == "Khóa/Mở",
                  })}
                >
                  {col}
                  {col !== "actions" && col !== "Khóa/Mở" && (
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
            expertname={item.expertname}
            major={item.industry ? item.industry[0] : ""}
            startday={item.startday}
            endday={item.endday}
            email={item.email}
            is_active={item.is_active}
            is_delete={item.is_delete}
            type={userType}
          />
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
