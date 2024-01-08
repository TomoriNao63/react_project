import { http, post, get, put, deleteJson, postMultipart } from "./axios";

export let userApi = {
  login: (p) => post("/api/login", p),
  reg: (p) => post("/api/reg", p),
  logout: () => get("/api/logout"),
  getUser: () => get("/api/admin/getUser"),
  getUserItem: () => get("/api/user/item"),
  getUserInfo: (p) => get("/api/user/home", p),
  uploadUserImg: (p) => postMultipart("/api/user/upload/userImg", p),
};
