import { http, post, get, put, deleteJson, postMultipart } from "./axios";

export let movieApi = {
  getMovie: () => get("/index"),
  captcha: () => get("/captcha/captcha.jpg"),
};
