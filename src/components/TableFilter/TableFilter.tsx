import { Search } from "lucide-react";
import {
  dataAccept,
  dataField,
  dataMemberType,
  dataVisible,
} from "~/common/data";

interface ITableFilter {
  memberType?: string;
  fieldSelected?: string;
  statusSelected?: string;
  status?: string;
  searchText: string;
  setMemberType?: React.Dispatch<React.SetStateAction<string>>;
  setFieldSelected?: React.Dispatch<React.SetStateAction<string>>;
  setStatusSelected?: React.Dispatch<React.SetStateAction<string>>;
  setStatus?: React.Dispatch<React.SetStateAction<string>>;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
}

const TableFilter = ({
  memberType,
  fieldSelected,
  statusSelected,
  searchText,
  status,
  setMemberType,
  setFieldSelected,
  setStatusSelected,
  setStatus,
  setSearchText,
}: ITableFilter) => {
  return (
    <div className="flex gap-4 items-center pb-4">
      {setMemberType && (
        <select
          className="border border-black px-3 py-2 text-sm w-48 cursor-pointer"
          value={memberType}
          onChange={(e) => setMemberType(e.target.value)}
        >
          <option value="">Tất cả</option>
          {dataMemberType.map((field) => {
            return (
              <option key={field.id} value={field.value}>
                {field.name}
              </option>
            );
          })}
        </select>
      )}
      {setFieldSelected && (
        <select
          className="border border-black px-3 py-2 text-sm w-48 cursor-pointer"
          value={fieldSelected}
          onChange={(e) => setFieldSelected(e.target.value)}
        >
          <option value="">Tất cả</option>
          {dataField.map((field) => {
            return (
              <option key={field.id} value={field.value}>
                {field.name}
              </option>
            );
          })}
        </select>
      )}

      {setStatusSelected && (
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
      )}

      {setStatus && (
        <select
          className="border border-black px-3 py-2 text-sm w-48 cursor-pointer"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          {dataAccept.map((field) => {
            return (
              <option key={field.id} value={field.value}>
                {field.name}
              </option>
            );
          })}
        </select>
      )}

      <div className="relative w-64 flex-1">
        <input
          type="text"
          placeholder="Tìm kiếm"
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
