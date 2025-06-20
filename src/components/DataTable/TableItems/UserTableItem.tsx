import { useQueryClient } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import clsx from "clsx";
import toast from "react-hot-toast";
import Button from "~/components/Button";
import * as userService from "~/services/user.service";
import { convertCategoryName } from "~/utils/files";

interface ITableBody {
  index: number;
  uuid: string;
  username: string;
  expertname: string;
  major?: string;
  email: string;
  startday?: string;
  endday?: string;
  is_active: number;
  is_delete: number;
  type: "expert-management" | "user-management";
}

const className = "px-3 py-1 text-nowrap text-sm";

export default function UserTableItem({
  index,
  uuid,
  username,
  expertname,
  major,
  email,
  startday,
  endday,
  is_active,
  is_delete,
  type,
}: ITableBody) {
  const queryClient = useQueryClient();

  const handleStatus = async (is_delete: 0 | 1, is_active?: 0 | 1) => {
    try {
      if (type == "user-management" && uuid) {
        await userService.userStatusChange(uuid, is_delete, is_active);
        queryClient.invalidateQueries({ queryKey: ["customerMana"] });
        toast.success("Đã thay đổi trạng thái tài khoản");
      }
    } catch (err) {
      const error = err as AxiosError<{ message: string }>;
      toast.error(error.response?.data.message || "Có lỗi xảy ra");
    }
  };

  return (
    <tr
      className={clsx("hover:bg-gray-50 border-b-1", {
        "bg-white": index % 2 === 0,
      })}
    >
      <td className={clsx(className)}>{index + 1}</td>
      <td className={clsx(className)}>{uuid}</td>
      <td className={clsx("", className)}>
        {type === "expert-management" ? expertname : username}
      </td>
      <td className={clsx("", className)}>{email}</td>
      {type === "user-management" && (
        <td className={clsx("", className)}>
          {startday && endday ? "Cao cấp" : "Phổ thông"}
        </td>
      )}
      {type === "expert-management" && (
        <td className={clsx("", className)}>{convertCategoryName(major)}</td>
      )}
      <td className={clsx("text-center", className)}>
        {is_active === 1 && is_delete === 0 ? (
          <Button
            className="py-1.5 px-3"
            confirm
            onClick={() => handleStatus(1, 1)}
          >
            Yes
          </Button>
        ) : (
          <Button
            className="py-1.5 px-4"
            cancel
            onClick={() => handleStatus(0)}
          >
            No
          </Button>
        )}
      </td>
      <td className={clsx("flex gap-2", className)}>
        <Button className="px-3 py-1.5" cancel>
          Delete
        </Button>
      </td>
    </tr>
  );
}
