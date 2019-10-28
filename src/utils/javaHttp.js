import axios from "axios";

import { Config } from "./index";
// 此处为axios配置请求头，

const javaApi = axios.create({
  baseURL: Config.javaApi,
  timeout: 10000
});

javaApi.interceptors.request.use(
  configs => {
    // 此处做请求拦截，如果有需要
    return configs;
  },
  err => {
    return Promise.reject(err);
  }
);
//响应拦截器即异常处理
javaApi.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    //失败判断
    return Promise.reject(error);
  }
);

export default javaApi;
