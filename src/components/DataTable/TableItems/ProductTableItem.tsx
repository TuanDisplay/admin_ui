import clsx from "clsx";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FileText } from "lucide-react";
import Button from "~/components/Button";
import { convertCategoryName } from "~/utils/files";
import * as productService from "~/services/product.service";
import toast from "react-hot-toast";

interface ITableBody {
  index: number;
  uuid: string;
  title: string;
  author: string;
  field: string;
  type: "idea-management" | "problem-management";
}

const className = "px-3 py-1 text-nowrap text-sm";

export default function ProductTableItem({
  index,
  uuid,
  title,
  author,
  field,
  type,
}: ITableBody) {
  const handleAccept = async () => {
    try {
      if (type == "idea-management" && uuid) {
        await productService.ideaAccept(uuid);
        toast.success("Đã duyệt ý tưởng");
      } else if (type == "problem-management" && uuid) {
        await productService.problemAccept(uuid);
        toast.success("Đã duyệt vấn đề");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const [isVisible, setVisible] = useState<boolean>(true);
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
      <td className={clsx("text-center", className)}>
        {isVisible ? (
          <Button
            className="py-1.5 px-3"
            confirm
            onClick={() => setVisible(false)}
          >
            Yes
          </Button>
        ) : (
          <Button
            className="py-1.5 px-4"
            cancel
            onClick={() => setVisible(true)}
          >
            No
          </Button>
        )}
      </td>
      <td className={clsx("", className)}>{convertCategoryName(field)}</td>
      <td className={clsx("flex gap-2", className)}>
        <Button className="px-2 py-1.5" confirm onClick={handleAccept}>
          Confirm
        </Button>
        <div className="w-[1px] my-2 bg-black"></div>
        <Button className="px-3 py-1.5" cancel>
          Delete
        </Button>
      </td>
    </tr>
  );
}
