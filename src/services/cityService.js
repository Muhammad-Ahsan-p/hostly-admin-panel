import http from "./httpService";

import { apiUrl } from "../config.json";

const apiEndPoint = apiUrl + "/cities";

function createCity(city) {
  return http.post(apiEndPoint, city);
}

function getAllCities() {
  return http.get(apiEndPoint);
}

export default {
  createCity,
  getAllCities,
};
