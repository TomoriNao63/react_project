import { http, post, get, put, deleteJson, postMultipart } from "./axios";

export let pageApi = {
  captcha: () => get("/api/captcha/captcha"),
  getHeaderItem: () => get("/api/getHeaderItem"),
  getIndex: () => post("/api/index"),
};
