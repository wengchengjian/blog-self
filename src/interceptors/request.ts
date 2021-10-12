import { AxiosRequestConfig } from 'axios';
export function consoleRequestData(request: AxiosRequestConfig) {
  console.log("请求数据", request);

  return request;
}