
import customerRequest from "~/utils/axios/customerRequest";

//customer

export const customer = async () => {
  const res = await customerRequest.get("/customer");
  return res.data;
};

