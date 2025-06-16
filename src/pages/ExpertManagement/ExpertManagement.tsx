import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import type { IUserManaPage } from "~/common/types";
import { UserTable } from "~/components/DataTable";
import PaginationBar from "~/components/PaginationBar";
import TableFilter from "~/components/TableFilter";
import LoadingScreen from "~/layouts/component/LoadingScreen";
import * as userService from "~/services/user.service";

const cols = ["no. ", "user_id", "name", "email", "visible", "actions"];

export default function IdeaManagement() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [fieldSelected, setFieldSelected] = useState("");
  const [statusSelected, setStatusSelected] = useState("");
  const [searchText, setSearchText] = useState("");

  const { data, isLoading } = useQuery({
    queryKey: ["customerMana"],
    queryFn: async (): Promise<IUserManaPage> => {
      const res = await userService.customer();
      return res;
    },
  });

  const itemsData = useMemo(() => {
    return data?.items ? data?.items : [];
  }, [data]);

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
          {isLoading ? (
            <LoadingScreen />
          ) : (
            <UserTable
              cols={cols}
              data={itemsData}
              userType="expert-management"
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
