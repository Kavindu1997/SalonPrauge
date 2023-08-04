import http from "./httpService";
import config from "../config.json";

const apiEndPoint = config.apiUrl + "/bookings";

export function createBooking(bookingData) {
  return http.post(apiEndPoint, bookingData);
}
