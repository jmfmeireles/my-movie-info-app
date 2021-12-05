import Axios, { AxiosResponse } from 'axios';

export default class ServiceCall {
  static get(url: string, params?: any): Promise<AxiosResponse<Response>> {
    return Axios.get(url, { params })
      .then((res: AxiosResponse<Response>) => {
        return res;
      })
      .catch(error => {
        throw error;
      });
  }
}
