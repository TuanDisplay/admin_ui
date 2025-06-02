import { useState } from "react";
import { UserTable } from "~/components/DataTable";
import PaginationBar from "~/components/PaginationBar";
import TableFilter from "~/components/TableFilter";

const cols = ["user_id", "name", "email", "visible", "actions"];

export default function IdeaManagement() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [fieldSelected, setFieldSelected] = useState("");
  const [statusSelected, setStatusSelected] = useState("");
  const [searchText, setSearchText] = useState("");

  return (
    <div className="mx-auto max-w-5xl">
      <div className="text-center mt-10">
        <h1 className="font-semibold text-2xl ">Experts Management</h1>
        <p className="font-medium text-xs opacity-50">
          Oversee and organize your field specialists effectively
        </p>
      </div>
      <div className="mt-5">
        <TableFilter
          fieldSelected={fieldSelected}
          statusSelected={statusSelected}
          searchText={searchText}
          setFieldSelected={setFieldSelected}
          setStatusSelected={setStatusSelected}
          setSearchText={setSearchText}
        />
        <div className="overflow-x-auto border border-gray-300 h-[55vh] overflow-y-auto">
          <UserTable cols={cols} userType="expert-management" />
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
