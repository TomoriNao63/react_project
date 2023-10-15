import { http, post, get, put, deleteJson, postMultipart } from "./axios";

export let pageApi = {
  captcha: () => get("/captcha/captcha.jpg"),
  getHeaderItem: () => get("/getHeaderItem"),
};
