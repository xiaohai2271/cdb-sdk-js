import axios, { AxiosRequestConfig, AxiosRequestHeaders, Method, RawAxiosRequestHeaders } from 'axios';
import { getConfig } from '../util/config';
import { RequestFunction } from '../types';
import { getHeader } from "../util/request.util";

const config = getConfig();


let instance = axios.create({
  baseURL: config.host,
  headers: {
    'Content-Type': 'application/json',
  }
});

const request: RequestFunction = (path: string, method: Method = 'get', params: Object = {}): Promise<any> => {
  return new Promise((resolve, reject) => {
    console.debug('use axios request');
    // @ts-ignore
    const headers: AxiosRequestHeaders = {
      ...getHeader(path, method, params)
    };
    let cfg: AxiosRequestConfig = {
      method: method,
      url: path,
      headers: headers,
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
