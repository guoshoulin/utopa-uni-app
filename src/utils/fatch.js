import Http from "./http";
import config from "../common/config";

let RequestBaseUrl;
try {
  RequestBaseUrl =
    process.env.NODE_ENV === "development"
      ? config.dev.baseApi
      : config.prod.baseApi;
} catch (error) {
  RequestBaseUrl = config.dev.baseApi;
}

const httpInstance = new Http({
  baseUrl: RequestBaseUrl
});

httpInstance.interceptor.response = response => {
  if (response.data.code === 99950005) {
    // 没有登录
  }
  return response;
};

export default httpInstance;

export const $post = async (url, params, options) => {
  return httpInstance.post(url, params, options);
};

export const $get = async (url, params) => {
  return httpInstance.get(url, params);
};
