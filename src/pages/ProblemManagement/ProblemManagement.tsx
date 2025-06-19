import { useQuery } from "@tanstack/react-query";
import { useEffect, useMemo, useState } from "react";
import type { IManaPage } from "~/common/types";
import { ProductTable } from "~/components/DataTable";
import PaginationBar from "~/components/PaginationBar";
import TableFilter from "~/components/TableFilter";
import LoadingScreen from "~/layouts/component/LoadingScreen";
import * as productService from "~/services/product.service";

const cols = [
  "no. ",
  "uuid",
  "title",
  "author",
  "date",
  "visible",
  "field",
  "actions",
];

export default function IdeaManagement() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [fieldSelected, setFieldSelected] = useState("");
  const [statusSelected, setStatusSelected] = useState("");
  const [searchText, setSearchText] = useState("");
  const [status, setStatus] = useState<string>("1:0");
  const [statusCheck, setStatusCheck] = useState<{
    is_active: number;
    is_delete: number;
  }>({ is_active: 1, is_delete: 0 });

  const newCols = useMemo(() => {
    if (status == "1:0" || status == "1:1") return cols;
    const isAccepting = cols.filter((item) => item !== "visible");
    return isAccepting;
  }, [status]);

  const params = {
    is_active: statusCheck.is_active,
    is_delete: statusCheck.is_delete,
  };

  const { data, isLoading } = useQuery({
    queryKey: ["problemMana", params],
    queryFn: async (): Promise<IManaPage> => {
      const res = await productService.problemMana(params);
      return res;
    },
  });

  const itemsData = useMemo(() => {
    return data?.items ? data?.items : [];
  }, [data]);

    useEffect(() => {
      if (status == "1:0") {
        setStatusCheck({ is_active: 1, is_delete: 0 });
      } else if (status == "1:1") {
        setStatusCheck({ is_active: 1, is_delete: 1 });
      } else {
        setStatusCheck({ is_active: 0, is_delete: 0 });
      }
    }, [status]);

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
          searchText={searchText}
          status={status}
          setFieldSelected={setFieldSelected}
          setStatusSelected={setStatusSelected}
          setStatus={setStatus}
          setSearchText={setSearchText}
        />
        <div className="overflow-x-auto border border-gray-300 h-[55vh] overflow-y-auto">
          {isLoading ? (
            <LoadingScreen />
          ) : (
            <ProductTable
              cols={newCols}
              productType="problem-management"
              data={itemsData}
            />
          )}
        </div>
      </div>
      <PaginationBar
        currentPage={currentPage}
        itemsPerPage={data?.limit ? data?.limit : 0}
        setCurrentPage={setCurrentPage}
        totalItems={data?.total ? data?.total : 0}
      />
    </div>
  );
}
