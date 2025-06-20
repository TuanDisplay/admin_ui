import clsx from "clsx";
import { ChevronsUpDown } from "lucide-react";
import type { IProductMana } from "~/common/types";
import ProductTableItem from "./TableItems/ProductTableItem";

interface IDataTable {
  cols: string[];
  data: IProductMana[];
  productType: "idea-management" | "problem-management";
}

const ProductTable = ({ cols, data, productType }: IDataTable) => {
  return (
    <table className="w-full">
      <thead className="bg-gray-100 border-b-2">
        <tr>
          {cols.map((col, index) => {
            return (
              <th
                key={index}
                className="p-2 capitalize text-left font-normal text-sm text-nowrap"
              >
                <div
                  className={clsx("flex items-center justify-between", {
                    "justify-center": col == "Thao tác" || col == "Trạng thái",
                  })}
                >
                  {col}
                  {col !== "Thao tác" && col !== "Trạng thái" && (
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
          <ProductTableItem
            key={index}
            index={index}
            uuid={item.uuid}
            author={item.customer_name}
            date={item.post_day}
            title={
              productType == "idea-management"
                ? item.ideasname
                : item.problemname
            }
            field={item.industry}
            isAccept={item.is_active}
            isDelete={item.is_delete}
            type={productType}
          />
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
