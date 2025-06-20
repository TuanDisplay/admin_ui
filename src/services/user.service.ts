import customerRequest from "~/utils/axios/customerRequest";
import expertRequest from "~/utils/axios/expertRequest";

interface IUserParams {
  is_active: number | "";
  is_delete: number | "";
  start_day?: string;
  username?: string;
  expertname?: string;
  industry?: string;
}

//customer
export const customer = async (params: IUserParams) => {
  const res = await customerRequest.get("/customer", {
    params: params,
  });
  return res.data;
};

export const userStatusChange = async (
  customer_id: string,
  is_delete: number,
  is_active?: number
) => {
  await customerRequest.put(`/customer/${customer_id}/update-status`, {
    is_active: is_active,
    is_delete: is_delete,
  });
};

//expert
export const expert = async (params: IUserParams) => {
  const res = await expertRequest.get("/expert/list-for-admin", {
    params: params,
  });
  return res.data;
};

// dashboard
export const totalExpert = async () => {
  const res = await expertRequest.get("/expert/count");
  return res.data;
};

export const totalUser = async () => {
  const res = await customerRequest.get("/customer/count");
  return res.data;
};
