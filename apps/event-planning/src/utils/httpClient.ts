import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

export const axiosBase = axios.create({
  baseURL: "https://api-sta.breezemm.com/v1/auth",
  timeout: 60 * 1000 * 1.5, // 15s,
  timeoutErrorMessage: "Connection time out by custom",
});

axiosBase.interceptors.request.use(
  (config) => {
    console.log(`request url ==> ${config.baseURL}/${config.url}`);
    console.log("config data", config.data);
    return config;
  },
  (error) => {
    throw error;
  }
);

axiosBase.interceptors.response.use((config) => {
  console.log("response ==> ", config.config.url, "status", config.status);
  return config;
});

type GlobalResponse = {
  [name: string]: any;
};

type GlobalRequest = {
  [key: string]: any;
};
const get = async <T extends GlobalResponse>(
  url: string,
  config?: AxiosRequestConfig
) => {
  try{
    const result: AxiosResponse<T> = await axiosBase.get(url, config);
  return result.data;
  } catch(err) {
    const error = err as AxiosError<T>
    throw error
  }
};

const post = async <T extends GlobalRequest, D extends GlobalResponse>(
  url: string,
  reqData: T,
  config?: AxiosRequestConfig
) => {
  try{
    const result: AxiosResponse<D, T> = await axiosBase.post(
      url,
      reqData,
      config
    );
    return result.data;
  } catch(err) {
    const error = err as AxiosError<T, D>
    throw error
  }
};

export const httpClient = {
  get,
  post,
};
