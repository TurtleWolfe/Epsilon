import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.2.5:9000/api",
});

export default apiClient;
