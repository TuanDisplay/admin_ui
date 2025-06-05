import clsx from "clsx";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  to?: string;
  href?: string;
  type?: string;
  edit?: boolean;
  confirm?: boolean;
  cancel?: boolean;
  disable?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  children: string | number | ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function Button({
  to,
  href,
  type,
  edit,
  confirm,
  cancel,
  disable = false,
  leftIcon,
  rightIcon,
  children,
  className = "",
  onClick,
}: ButtonProps) {
  let Comp: any = "button";
  const props: any = {
    type,
    onClick,
  };

  if (disable) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith("on") && typeof props[key] === "function") {
        delete props[key];
      }
    });
  }

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }

  return (
    <Comp
      className={clsx(
        "flex cursor-pointer items-center justify-center gap-2 duration-500",
        {
          "bg-amber-500 rounded-lg text-white hover:bg-amber-400 hover:shadow-2xl":
            edit,
          "bg-green-600 rounded-lg text-white hover:bg-green-400 hover:shadow-2xl":
            confirm,
          "bg-red-500 hover:bg-red-400 text-white hover:shadow-2xl rounded-lg":
            cancel,
          "!cursor-not-allowed opacity-30": disable,
        },
        className
      )}
      {...props}
    >
      {leftIcon && <span className="icon">{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className="icon">{rightIcon}</span>}
    </Comp>
  );
}
