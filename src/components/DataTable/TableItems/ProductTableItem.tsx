import clsx from "clsx";
import { Link } from "react-router-dom";
import { FileText } from "lucide-react";
import Button from "~/components/Button";
import { convertCategoryName, convertIsoDate } from "~/utils/files";
import * as productService from "~/services/product.service";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";
import type { AxiosError } from "axios";

interface ITableBody {
  index: number;
  uuid: string;
  title: string;
  author: string;
  date: string;
  field: string;
  isAccept: number;
  isDelete: number;
  type: "idea-management" | "problem-management";
}

const className = "px-3 py-1 text-nowrap text-sm";

export default function ProductTableItem({
  index,
  uuid,
  title,
  author,
  date,
  field,
  isAccept,
  isDelete,
  type,
}: ITableBody) {
  const queryClient = useQueryClient();

  const handleAccept = async (is_active: 0 | 1) => {
    try {
      if (type == "idea-management" && uuid) {
        await productService.ideaAccept(uuid, is_active);
        queryClient.invalidateQueries({ queryKey: ["ideaMana"] });
        toast.success("Đã duyệt ý tưởng");
      } else if (type == "problem-management" && uuid) {
        await productService.problemAccept(uuid, is_active);
        queryClient.invalidateQueries({ queryKey: ["problemMana"] });
        toast.success("Đã duyệt vấn đề");
      }
    } catch (err) {
      const error = err as AxiosError<{ message: string }>;
      toast.error(error.response?.data.message || "Lỗi duyệt sản phẩm");
    }
  };

  const handleReject = async (is_delete: 0 | 1, toastMessage: string) => {
    try {
      if (type == "idea-management" && uuid) {
        await productService.ideaReject(uuid, is_delete);
        queryClient.invalidateQueries({ queryKey: ["ideaMana"] });
        toast.error(toastMessage);
      } else if (type == "problem-management" && uuid) {
        await productService.problemReject(uuid, is_delete);
        queryClient.invalidateQueries({ queryKey: ["problemMana"] });
        toast.error(toastMessage);
      }
    } catch (err) {
      const error = err as AxiosError<{ message: string }>;
      toast.error(error.response?.data.message || "Lỗi xóa sản phẩm");
    }
  };

  return (
    <tr
      key={index}
      className={clsx("hover:bg-gray-50 border-b-1", {
        "bg-white": index % 2 === 0,
      })}
    >
      <td className={clsx(className)}>{index + 1}</td>
      <td className={clsx(className)}>{uuid}</td>
      <td className={clsx("flex gap-2 items-center mt-2", className)}>
        <FileText size={16} />
        <Link
          to={`/${type}/${uuid}`}
          className="text-[#66A1D4] cursor-pointer hover:underline"
        >
          {title}
        </Link>
      </td>
      <td className={clsx("", className)}>{author}</td>
      <td className={clsx("", className)}>{convertIsoDate(date)}</td>
      {isAccept === 1 && (
        <td className={clsx("text-center", className)}>
          {isDelete === 0 ? (
            <Button
              className="py-1.5 px-3"
              confirm
              onClick={() => handleReject(1, "Đã ẩn ý tưởng")}
            >
              Yes
            </Button>
          ) : (
            <Button
              className="py-1.5 px-4"
              cancel
              onClick={() => handleReject(0, "Đã hiện ý tưởng")}
            >
              No
            </Button>
          )}
        </td>
      )}
      <td className={clsx("", className)}>{convertCategoryName(field)}</td>
      <td className={clsx("flex gap-2", className)}>
        {isAccept === 0 && (
          <Button
            className="px-2 py-1.5"
            confirm
            onClick={() => handleAccept(1)}
          >
            Accept
          </Button>
        )}
        {isAccept === 0 && <div className="w-[1px] my-2 bg-black"></div>}
        <Button
          className="px-3 py-1.5"
          cancel
          onClick={() => handleReject(1, "Đã xóa ý tưởng")}
        >
          Delete
        </Button>
      </td>
    </tr>
  );
}
