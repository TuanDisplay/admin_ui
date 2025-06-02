import adminRequest from "~/utils/axios/adminRequest";

export const login = async (email: string, password: string) => {
  const res = await adminRequest.post("/admin/login", {
    email: email,
    password: password,
  });
  return res.data;
};

