import { AxiosResponse } from 'axios';
import net from '@/utils/net';

function handleResponse(asyncResult: AxiosResponse<any>) {
  switch (asyncResult.data.code) {
    // case 214:
    //   net.setAuth(asyncResult.data.data);
    //   break;
    // case 420:
    //   LoginStore.Logout();
    //   break;
    // case 421:
    //   LoginStore.Logout();
    //   break;

  }
}

export default handleResponse;