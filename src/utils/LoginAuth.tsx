import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";

export default function LoginAuth({ children }: { children: ReactNode }) {
  const token = localStorage.getItem("adminToken");

  if (!token) {
    return <Navigate to="/admin-login" replace />;
  }
  return <>{children}</>;
}
