import axios from "axios";

const fetcher = <T,>(url: string): Promise<T> => {
  return axios
    .get<T>(url, {
      withCredentials: true,
    })
    .then((res) => res.data);
};

export default fetcher;
