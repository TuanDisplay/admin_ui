import { useState } from "react";
import * as adminService from "~/services/admin.service";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import type { AxiosError } from "axios";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await adminService.login(email, password);
      const token = res.data.token;
      if (token) {
        localStorage.setItem("adminToken", token);
        navigate("/");
        toast.success("Đăng nhập thành công");
      }
    } catch (err) {
      const error = err as AxiosError<{ message: string }>;
      toast.error(error.response?.data.message || "Có lỗi xảy ra");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Admin Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
              autoCorrect={password}
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-md transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
