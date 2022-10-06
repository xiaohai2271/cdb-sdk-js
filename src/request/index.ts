import { getAppType, httpSign, randomString } from '../util/utils';
import { AppType, RequestFunction } from '../types';
import { getConfig } from '../util/config';
import { AxiosRequestHeaders, Method } from 'axios';
import axiosRequest from './axios';
import wxRequest from './wechat';

let request: RequestFunction = () => Promise.reject('no request function found');

// 获取当前应用类型
const type = getAppType();
let typeString = 'unknown'
if (type === AppType.Html5) {
// h5
  request = axiosRequest;
  typeString='html5'
} else if (type === AppType.WeChat) {
  // 小程序
  request = wxRequest;
  typeString='wechat'
} else if (type === AppType.NodeJs) {
  // 快应用功能
  request = axiosRequest;
  typeString='nodejs'
}


export const getHeader = (path: string, method: Method, params: Object) => {
  const config = getConfig();
  const t = Math.round(new Date().getTime() / 1000);
  let data = (method === 'get' || method === 'delete') ? {} : params;
  const rand = randomString();
  const sign = httpSign(path, data, t, config.request?.secretKey||'', config.sdkVersion, rand);
  let header = {
    'content-type': 'application/json',
    'X-HCDB-SDK-Type': typeString,
    'X-HCDB-Safe-Sign': sign,
    'X-HCDB-Safe-Timestamp': t,
    'X-HCDB-Scatter-Key': rand,
    'X-HCDB-SDK-Version': config.sdkVersion,
    'X-HCDB-App-Key': config.request?.applicationKey,
  } as AxiosRequestHeaders;
  console.debug('Create Header', header);
  return header;
};

export default request;
