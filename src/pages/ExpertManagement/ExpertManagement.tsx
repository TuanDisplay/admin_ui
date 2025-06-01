import { useState } from "react";
import DataTable from "~/components/DataTable";
import PaginationBar from "~/components/PaginationBar";

export default function IdeaManagement() {
  const [currentPage, setCurrentPage] = useState<number>(1);

  return (
    <div className="mx-auto max-w-[1000px]">
      <div className="text-center mt-10">
        <h1 className="font-semibold text-2xl ">Experts Management</h1>
        <p className="font-medium text-xs opacity-50">
          Oversee and organize your field specialists effectively
        </p>
      </div>
      <div className="mt-8">
        <DataTable />
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
