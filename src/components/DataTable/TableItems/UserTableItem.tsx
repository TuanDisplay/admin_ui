import clsx from "clsx";
import { useState } from "react";
import Button from "~/components/Button";

interface ITableBody {
  index: number;
  uuid: string;
  username: string;
  major?: string;
  email: string;
}

const className = "px-3 py-1 text-nowrap text-sm";

export default function UserTable({
  index,
  uuid,
  username,
  major,
  email,
}: ITableBody) {
  const [isVisible, setVisible] = useState<boolean>(true);
  return (
    <tr
      key={index}
      className={clsx("hover:bg-gray-50 border-b-1", {
        "bg-white": index % 2 === 0,
      })}
    >
      <td className={clsx(className)}>{uuid}</td>
      <td className={clsx("", className)}>{username}</td>
      <td className={clsx("", className)}>{email}</td>
      {major && <td className={clsx("", className)}>{major}</td>}
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
      <td className={clsx("", className)}>
        <Button className="px-3 py-1.5" cancel>
          Delete
        </Button>
      </td>
    </tr>
  );
}
