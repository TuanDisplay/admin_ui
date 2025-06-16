import { Search } from "lucide-react";
import { dataAccept, dataField, dataVisible } from "~/common/data";

interface ITableFilter {
  fieldSelected: string;
  statusSelected: string;
  isAccept?: number;
  searchText: string;
  setFieldSelected: React.Dispatch<React.SetStateAction<string>>;
  setStatusSelected: React.Dispatch<React.SetStateAction<string>>;
  setAccept?: React.Dispatch<React.SetStateAction<number>>;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
}

const TableFilter = ({
  fieldSelected,
  statusSelected,
  isAccept,
  setFieldSelected,
  setStatusSelected,
  setAccept,
  searchText,
  setSearchText,
}: ITableFilter) => {
  return (
    <div className="flex gap-4 items-center pb-4">
      <select
        className="border border-black px-3 py-2 text-sm w-48 cursor-pointer"
        value={fieldSelected}
        onChange={(e) => setFieldSelected(e.target.value)}
      >
        <option value="" disabled>
          Lọc theo lĩnh vực
        </option>
        {dataField.map((field) => {
          return (
            <option key={field.id} value={field.value}>
              {field.name}
            </option>
          );
        })}
      </select>

      <select
        className="border border-black px-3 py-2 text-sm w-48 cursor-pointer"
        value={statusSelected}
        onChange={(e) => setStatusSelected(e.target.value)}
      >
        <option value="" disabled>
          Lọc theo trạng thái
        </option>
        {dataVisible.map((field) => {
          return (
            <option key={field.id} value={field.value}>
              {field.name}
            </option>
          );
        })}
      </select>

      {setAccept && (
        <select
          className="border border-black px-3 py-2 text-sm w-48 cursor-pointer"
          value={isAccept}
          onChange={(e) => setAccept(parseInt(e.target.value))}
        >
          {dataAccept.map((field) => {
            return (
              <option key={field.id} value={field.value} selected>
                {field.name}
              </option>
            );
          })}
        </select>
      )}

      <div className="relative w-64 flex-1">
        <input
          type="text"
          placeholder="Search"
          className="border border-black px-3 py-1.5 text-sm w-full"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Search
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black"
          size={16}
        />
      </div>
    </div>
  );
};

export default TableFilter;
