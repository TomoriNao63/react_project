import axios from "axios";

const http = axios.create({
  headers: {
    token: localStorage.getItem("token") || "",
  },
  baseURL: "http://localhost:8081",
  timeout: 2 * 60 * 1000,
  withCredentials: true,
});

//request拦截器
http.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (config.url === "/api/excel/download") {
      config.responseType = "blob";
    }

    // 特殊配置：登录接口，将 请求的头的 token 设置为空字符串
    if (config.url === "/login") {
      config.headers["token"] = "";
    } else {
      config.headers["token"] = token || "";
    }

    return config;
  },
  (error) => {
    console.warn(error);
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  function (res) {
    const data = res.data;
    if (data.code === 0) {
      return data;
    } else {
      return Promise.reject(new Error(res.data.message));
    }
  },
  function (err) {
    return Promise.reject(err);
  }
);

/**
 * post请求
 * @param url 接口路径
 */
function post(url, params = {}) {
  return new Promise((resolve, reject) => {
    http({
      method: "post",
      url: url,
      data: params,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
    })
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

/**
 * get请求
 * @param url 接口路径
 */
function get(url, param = {}) {
  let params = {
    params: param,
  };
  return new Promise((resolve, reject) => {
    http
      .get(url, params)
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

/**
 * put请求
 * @param url 接口路径
 */
function put(url, params = {}) {
  return new Promise((resolve, reject) => {
    http({
      method: "put",
      url: url,
      data: params,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
    })
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

/**
 * delete请求
 * @param url 接口路径
 */
function deleteJson(url, params = {}) {
  return new Promise((resolve, reject) => {
    http({
      method: "delete",
      url: url,
      data: params,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
    })
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

/**
 * multipart post请求 常用于文件上传
 * @param url 接口路径
 */
function postMultipart(url, params = {}) {
  return new Promise((resolve, reject) => {
    http({
      method: "post",
      url: url,
      data: params,
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data;boundary=" + new Date().getTime(),
      },
    })
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export { http, post, get, put, deleteJson, postMultipart };
