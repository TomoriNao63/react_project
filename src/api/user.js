import { http, post, get, put, deleteJson, postMultipart } from "./axios";

export let userApi = {
  login: (p) => post("/login", p),
  reg: (p) => post("/reg", p),
  logout: () => get("/logout"),
  getUser: () => get("/admin/getUser"),
  getUserInfo: (p) => get("/user/home", p),
};
