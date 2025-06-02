import { useState } from "react";
import { ProductTable } from "~/components/DataTable";
import PaginationBar from "~/components/PaginationBar";
import TableFilter from "~/components/TableFilter";

const cols = ["stt", "title", "author", "visible", "last update", "actions"];

export default function IdeaManagement() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [fieldSelected, setFieldSelected] = useState("");
  const [statusSelected, setStatusSelected] = useState("");
  const [priceSelected, setPriceSelected] = useState("");
  const [searchText, setSearchText] = useState("");

  return (
    <div className="mx-auto max-w-5xl">
      <div className="text-center mt-10">
        <h1 className="font-semibold text-2xl ">Problems Management</h1>
        <p className="font-medium text-xs opacity-50">
          Centralize problem-solving for better decision-making
        </p>
      </div>
      <div className="mt-5">
        <TableFilter
          fieldSelected={fieldSelected}
          statusSelected={statusSelected}
          priceSelected={priceSelected}
          searchText={searchText}
          setFieldSelected={setFieldSelected}
          setStatusSelected={setStatusSelected}
          setPriceSelected={setPriceSelected}
          setSearchText={setSearchText}
        />
        <div className="overflow-x-auto border border-gray-300 h-[55vh] overflow-y-auto">
          <ProductTable cols={cols} productType="problem-management" />
        </div>
      </div>
      <PaginationBar
        currentPage={currentPage}
        itemsPerPage={3}
        setCurrentPage={setCurrentPage}
        totalItems={8}
      />
    </div>
  );
}
