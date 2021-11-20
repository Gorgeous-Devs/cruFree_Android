import {API_URL} from "@env";
import axios from "axios";

export const get = async (endpoint = "") => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append(("Accept": "*/*"));

  const response = await axios.get(API_URL + endpoint, {
    headers: {
      "Content-Type": "application/json",
      Accept: "*/*",
    },
  });
  if (response.status === 200) {
    const datas = await response.data;
    return {status: true, datas};
  } else {
    return {status: false, message: "Birşeyler Tes Gitti"};
  }
};
