import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndPoint = apiUrl + "/logs";

function getLoginStatistics() {
  return http.get(apiEndPoint + "/login");
}

function getRegisterStatistics() {
  return http.get(apiEndPoint + "/register");
}

function getAdStatistics() {
  return http.get(apiEndPoint + "/ads");
}

export default {
  getLoginStatistics,
  getRegisterStatistics,
  getAdStatistics,
};
