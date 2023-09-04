import { userApi } from "./user";
import { movieApi } from "./movie";
const api = {
  ...userApi,
  ...movieApi,
};

export default api;
