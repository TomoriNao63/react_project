import { userApi } from "./user";
import { pageApi } from "./page";
const api = {
  ...userApi,
  ...pageApi,
};

export default api;
