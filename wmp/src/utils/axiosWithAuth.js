import axios from "axios";

export const AxiosWithAuth = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    // baseURL: ;
    headers: {
      Authorization: token,
    },
  });
};
