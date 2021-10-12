import { IGetRequestRoutes } from "@/types/request/routes"
import { IGetResponseRoutes } from "@/types/response/routes"
import net from "@/utils/net";
import { IV } from "@/types/common/IV";
import { simpleInterceptor } from "@/interceptors/response";
export function buildGetApi<PATH extends keyof IGetRequestRoutes>(path: PATH) {
  return async (params: IGetRequestRoutes[PATH], config?: IV) => {
    const data: IV = await net.get(path, params, config);

    const res = data.data as IV;

    simpleInterceptor.intercept(res);

    return (res.data as IV) as IGetResponseRoutes[PATH];
  }
}