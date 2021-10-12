import { IPostRequestRoutes } from "@/types/request/routes"
import { IPostResponseRoutes } from "@/types/response/routes"
import net from "@/utils/net";
import { IV } from "@/types/common/IV";
import { simpleInterceptor } from "@/interceptors/response";

export function buildPostApi<PATH extends keyof IPostRequestRoutes>(path: PATH) {
  return async (params: IPostRequestRoutes[PATH], config?: IV) => {
    const data: IV = await net.post(path, params, config);

    const res = data.data as IV;

    simpleInterceptor.intercept(res);

    return (res.data as IV) as IPostResponseRoutes[PATH];
  }
}