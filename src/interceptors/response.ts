import { AxiosResponse } from 'axios';
import { IV } from "@/types/common/IV";
import { message } from 'antd';
import userStore from '@/mobx/UserStore';
export function consoleResponseData(response: AxiosResponse<any>) {
  console.log("响应数据", response);
  return response;;
}

type UserMethodProps = (value: IV) => void

class HandleResponseStandOutInterceptor {
  join(res: IV) {
    return res;
  }
  use(func: UserMethodProps) {
    const current = this.join;
    this.join = (res) => {
      current(res);
      func(res)
      return res;
    }
  }
  start(res: IV) {
    this.join(res);
  }
  intercept(res: IV) {

    try {
      this.start(res);
    } catch (err: any) {
      console.log(err.toString());
    }
  }
}

export const simpleInterceptor = new HandleResponseStandOutInterceptor();

simpleInterceptor.use((res: IV) => {
  if (res.code === 416) {
    userStore.Logout();
  }
});

simpleInterceptor.use((res: IV) => {
  if (res.code === 214) {
    userStore.Login(res.data);
    res.data = undefined;
  }
});

simpleInterceptor.use((res: IV) => {
  const code = String(res.code);
  if (code.startsWith("4")) {
    message.error(res.message || res.msg || "请求错误")
  }
})
