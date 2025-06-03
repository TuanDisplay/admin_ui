import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ProductTable } from "~/components/DataTable";
import PaginationBar from "~/components/PaginationBar";
import TableFilter from "~/components/TableFilter";
import * as productService from "~/services/product.service";
import type { IManaPage } from "~/common/types";
import LoadingScreen from "~/layouts/component/LoadingScreen";
// import { useDebounce } from "~/hooks/useDebounce";

const cols = ["stt", "uuid", "title", "author", "visible", "field", "actions"];

export default function IdeaManagement() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [fieldSelected, setFieldSelected] = useState("");
  const [statusSelected, setStatusSelected] = useState("");
  const [priceSelected, setPriceSelected] = useState("");
  const [searchText, setSearchText] = useState("");

  // const debounceSearchValue = useDebounce(searchText, 500)

  const { data, isLoading } = useQuery({
    queryKey: ["Idea-Mana"],
    queryFn: async (): Promise<IManaPage> => {
      const res = await productService.ideaWatting();
      return res;
    },
    staleTime: 1000 * 60 * 2,
    retry: 2,
  });

  const itemsData = useMemo(() => {
    return data?.items ? data?.items : [];
  }, [data]);

  return (
    <div className="mx-auto max-w-5xl">
      <div className="text-center mt-10">
        <h1 className="font-semibold text-2xl">Ideas Management</h1>
        <p className="font-medium text-xs opacity-50">
          Organize, Prioritize, and Execute Ideas Effectively
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
