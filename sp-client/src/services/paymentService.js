import http from "./httpService";
import config from "../config.json";

const apiEndPoint = config.apiUrl + "/payments";

export function createPayment(paymentData) {
  return http.post(apiEndPoint, paymentData);
}
