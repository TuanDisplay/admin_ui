import { Search } from "lucide-react";
import { dataField, dataPriceRange, dataVisible } from "~/common/data";

interface ITableFilter {
  fieldSelected: string;
  statusSelected: string;
  priceSelected?: string;
  searchText: string;
  setFieldSelected: React.Dispatch<React.SetStateAction<string>>;
  setStatusSelected: React.Dispatch<React.SetStateAction<string>>;
  setPriceSelected?: React.Dispatch<React.SetStateAction<string>>;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
}

const TableFilter = ({
  fieldSelected,
  statusSelected,
  priceSelected,
  setFieldSelected,
  setStatusSelected,
  setPriceSelected,
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

      {/* Filter by date */}
      {priceSelected ||
        (setPriceSelected && (
          <select
            className="border border-black px-3 py-2 text-sm w-48 cursor-pointer"
            value={priceSelected}
            onChange={(e) => setPriceSelected(e.target.value)}
          >
            <option value="">Tất cả mức giá</option>
            {dataPriceRange.map((field) => {
              return (
                <option key={field.id} value={field.value}>
                  {field.name}
                </option>
              );
            })}
          </select>
        ))}

      {/* Search input */}
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
