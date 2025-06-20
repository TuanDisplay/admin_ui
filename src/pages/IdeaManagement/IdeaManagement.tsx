import { useEffect, useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ProductTable } from "~/components/DataTable";
import PaginationBar from "~/components/PaginationBar";
import TableFilter from "~/components/TableFilter";
import * as productService from "~/services/product.service";
import type { IManaPage } from "~/common/types";
import LoadingScreen from "~/layouts/component/LoadingScreen";
import { useDebounce } from "~/hooks/useDebounce";

const cols = [
  "Stt",
  "Mã ý tưởng",
  "Tên ý tưởng",
  "Tác giả",
  "Ngày đăng",
  "Trạng thái",
  "Lĩnh vực",
  "Thao tác",
];

export default function IdeaManagement() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [fieldSelected, setFieldSelected] = useState("");
  const [searchText, setSearchText] = useState("");
  const [status, setStatus] = useState<string>("1:0");
  const [statusCheck, setStatusCheck] = useState<{
    is_active: number;
    is_delete: number;
  }>({ is_active: 1, is_delete: 0 });

  const newCols = useMemo(() => {
    if (status == "1:0" || status == "1:1") return cols;
    const isAccepting = cols.filter((item) => item !== "Trạng thái");
    return isAccepting;
  }, [status]);

  const searchDebounce = useDebounce(searchText, 500);

  const params = {
    is_active: statusCheck.is_active,
    is_delete: statusCheck.is_delete,
    page: currentPage,
    industry: fieldSelected,
    ideasname: searchDebounce,
  };

  const { data, isLoading } = useQuery({
    queryKey: ["ideaMana", params],
    queryFn: async (): Promise<IManaPage> => {
      const res = await productService.ideaMana(params);
      return res;
    },
    staleTime: 1000 * 60 * 2,
    retry: 2,
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
        <h1 className="font-semibold text-2xl">Quản lý ý tưởng</h1>
        <p className="font-medium text-xs opacity-50">
          Tổ chức và triển khai ý tưởng một cách hiệu quả
        </p>
      </div>
      <div className="mt-5">
        <TableFilter
          fieldSelected={fieldSelected}
          searchText={searchText}
          status={status}
          setFieldSelected={setFieldSelected}
          setStatus={setStatus}
          setSearchText={setSearchText}
        />
        <div className="overflow-x-auto border border-gray-300 h-[55vh] overflow-y-auto">
          {isLoading ? (
            <LoadingScreen />
          ) : (
            <ProductTable
              cols={newCols}
              data={itemsData}
              productType="idea-management"
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
