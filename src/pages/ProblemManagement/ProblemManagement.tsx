import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import type { IManaPage } from "~/common/types";
import { ProductTable } from "~/components/DataTable";
import PaginationBar from "~/components/PaginationBar";
import TableFilter from "~/components/TableFilter";
import LoadingScreen from "~/layouts/component/LoadingScreen";
import * as productService from "~/services/product.service";

const cols = ["stt", "uuid", "title", "author", "visible", "field", "actions"];

export default function IdeaManagement() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [fieldSelected, setFieldSelected] = useState("");
  const [statusSelected, setStatusSelected] = useState("");
  const [priceSelected, setPriceSelected] = useState("");
  const [searchText, setSearchText] = useState("");

  const { data, isLoading } = useQuery({
    queryKey: ["problemMana"],
    queryFn: async (): Promise<IManaPage> => {
      const res = await productService.problemWatting();
      return res;
    },
  });

  const itemsData = useMemo(() => {
    return data?.items ? data?.items : [];
  }, [data]);

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
          {isLoading ? (
            <LoadingScreen />
          ) : (
            <ProductTable
              cols={cols}
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
