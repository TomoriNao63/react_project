import { http, post, get, put, deleteJson, postMultipart } from "./axios";

export let movieApi = {
  getMovie: () => get("/index"),
};
