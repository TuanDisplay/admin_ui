import type { ReactNode } from "react";
// import { Navigate } from "react-router-dom";

export default function LoginAuth({ children }: { children: ReactNode }) {
  // const token = "k";
  // if (token == "") {
  //   return <Navigate to="/admin-login" />;
  // }
  return <>{children}</>;
}
