import { getConfig } from '../util/config';
import { Method } from 'axios';
import { RequestFunction } from '../types';
import { getHeader } from "../util/request.util";

const config = getConfig();

const request: RequestFunction = (path: string, method: Method = 'get', params: Object = {}): Promise<any> => {
  return new Promise((resolve, reject) => {
    console.debug("use wechat request");
    // @ts-ignore
    wx.request({
      url: config.host + path,
      method: method,
      data: params,
      header: getHeader(path, method, params),
      success: (res: any) => {
        if ((res.data.code && res.data.error) || res.data.error) {
          reject(res.data);
        }
        resolve(res.data);
      },
      fail: (e: any) => {
        reject(e);
      },
    });
  });
};

export default request;
