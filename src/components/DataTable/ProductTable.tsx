import clsx from "clsx";
import { ChevronsUpDown } from "lucide-react";
import { ProductTable } from "./TableItems";
import type { IIdeaMana } from "~/common/types";

interface IDataTable {
  cols: string[];
  data: IIdeaMana[];
  productType: "idea-management" | "problem-management";
}

const DataTable = ({ cols, data, productType }: IDataTable) => {
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
                    "justify-center": col == "actions" || col == "visible",
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
          <ProductTable
            index={index}
            uuid={item.uuid}
            author={item.customer_name}
            title={item.ideasname}
            lastUpdate={item.industry}
            type={productType}
          />
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
