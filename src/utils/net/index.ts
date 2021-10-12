import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { IGetRequestRoutes, IPostRequestRoutes } from "@/types/request/routes"
import { IGetResponseRoutes, IPostResponseRoutes } from "@/types/response/routes"
import { IV } from "@/types/common/IV";
import { config as ajaxConfig } from "./config";
import { consoleResponseData } from "@/interceptors/response";
import { consoleRequestData } from "@/interceptors/request";
export class Net4j {
  ajaxInstance: AxiosInstance;
  constructor(config?: AxiosRequestConfig) {
    this.ajaxInstance = axios.create(config);
    this.ajaxInstance.interceptors.request.use(consoleRequestData)
    this.ajaxInstance.interceptors.response.use(consoleResponseData)
  }

  setAuth(token: string) {
    this.ajaxInstance.defaults.headers.common["Authorization"] = token;
  }
  getAuth() {
    return this.ajaxInstance.defaults.headers.common['Authorization']
  }

  async post<PATH extends keyof IPostRequestRoutes>(path: PATH, params: IPostRequestRoutes[PATH], config?: IV): Promise<IPostResponseRoutes[PATH]> {
    const data: IV = await this.ajaxInstance.post(path, params, config)
    return data as Promise<IPostResponseRoutes[PATH]>
  }
  async get<PATH extends keyof IGetRequestRoutes>(path: PATH, params: IGetRequestRoutes[PATH], config?: IV): Promise<IGetResponseRoutes[PATH]> {
    const data: IV = await this.ajaxInstance.get(path, {
      params,
    })
    return data as Promise<IGetResponseRoutes[PATH]>
  }
}

const net: Net4j = new Net4j(ajaxConfig);

export default net;