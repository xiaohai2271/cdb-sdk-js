import { Method } from "axios";
import { getConfig } from "./config";
import { getAppType, getTypeString, randomString } from "./utils";
import CryptoJS from 'crypto-js';
export const httpSign = (
  httpPath: string,
  httpData: object,
  timeStamp: number | string,
  secretKey: string,
  sdkVersion: string,
  randomStr: string,
): string => {
  return CryptoJS.MD5(httpPath + timeStamp + secretKey + randomStr + JSON.stringify(httpData) + sdkVersion).toString();
};

export const getHeader = (path: string, method: Method, params: Object) => {
  const config = getConfig();
  const t = Math.round(new Date().getTime() / 1000);
  let data = (method === 'get' || method === 'delete') ? {} : params;
  const rand = randomString();
  const sign = httpSign(path, data, t, config.request?.secretKey || '', config.sdkVersion, rand);
  let header = {
    'Content-Type': 'application/json',
    'X-HCDB-SDK-Type': getTypeString(getAppType()),
    'X-HCDB-Safe-Sign': sign,
    'X-HCDB-Safe-Timestamp': t,
    'X-HCDB-Scatter-Key': rand,
    'X-HCDB-SDK-Version': config.sdkVersion,
    'X-HCDB-App-Key': config.request?.applicationKey,
  };
  console.debug('Create Header', header);
  return header;
};
