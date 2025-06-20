import { useQuery } from "@tanstack/react-query";
import { useEffect, useMemo, useState } from "react";
import type { IUserManaPage } from "~/common/types";
import { UserTable } from "~/components/DataTable";
import PaginationBar from "~/components/PaginationBar";
import TableFilter from "~/components/TableFilter";
import { useDebounce } from "~/hooks/useDebounce";
import LoadingScreen from "~/layouts/component/LoadingScreen";
import * as userService from "~/services/user.service";

const cols = [
  "Stt",
  "mã người dùng",
  "tên người dùng",
  "email",
  "Thành viên",
  "Khóa/mở",
  "Thao tác",
];

export default function IdeaManagement() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [memberType, setMemberType] = useState("");
  const [searchText, setSearchText] = useState("");
  const [statusSelected, setStatusSelected] = useState("");
  const [statusCheck, setStatusCheck] = useState<{
    is_active: number | "";
    is_delete: number | "";
  }>({ is_active: "", is_delete: "" });

  const searchDebounce = useDebounce(searchText, 500);

  const params = {
    is_active: statusCheck.is_active,
    is_delete: statusCheck.is_delete,
    start_day: memberType,
    username: searchDebounce,
  };

  const { data, isLoading } = useQuery({
    queryKey: ["customerMana", params],
    queryFn: async (): Promise<IUserManaPage> => {
      const res = await userService.customer(params);
      return res;
    },
  });

  const itemsData = useMemo(() => {
    return data?.items ? data?.items : [];
  }, [data]);

  useEffect(() => {
    if (statusSelected == "1:0") {
      setStatusCheck({ is_active: 1, is_delete: 0 });
    } else if (statusSelected == "1:1") {
      setStatusCheck({ is_active: 1, is_delete: 1 });
    } else {
      setStatusCheck({ is_active: "", is_delete: "" });
    }
  }, [statusSelected]);

  return (
    <div className="mx-auto max-w-5xl">
      <div className="text-center mt-10">
        <h1 className="font-semibold text-2xl ">Quản lý người dùng</h1>
        <p className="font-medium text-xs opacity-50">
          Theo dõi người dùng trên nền tảng của bạn ở một nơi duy nhất
        </p>
      </div>
      <div className="mt-5">
        <TableFilter
          memberType={memberType}
          statusSelected={statusSelected}
          searchText={searchText}
          setMemberType={setMemberType}
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
              userType="user-management"
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
