import axios, { AxiosRequestConfig, Method } from 'axios';
import { getConfig } from '../util/config';
import { getHeader } from './index';
import { RequestFunction } from '../types';

const config = getConfig();


let instance = axios.create({
  baseURL: config.host,
});

const request: RequestFunction = (path: string, method: Method = 'get', params: Object = {}): Promise<any> => {
  return new Promise((resolve, reject) => {
    console.debug('use axios request');
    let cfg: AxiosRequestConfig = {
      method: method,
      url: path,
      headers: getHeader(path, method, params),
      params: method === 'get' ? params : undefined,
      data: method !== 'get' ? params : undefined,
    };
    instance.request(cfg).then(({ data }) => {
      if ((data.code && data.error) || data.error) {
        reject(data);
        return;
      }
      resolve(data);
    }).catch(e => reject(e));
  });
};

export default request;
