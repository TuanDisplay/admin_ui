import paymentRequest from "~/utils/axios/paymentRequest";

export const productPaymentHis = async () => {
  const res = await paymentRequest.get("/history/paymentproduct");
  return res.data;
};
