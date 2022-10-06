import { AppType } from '../types';
import md5 from 'js-md5';
// 获取SDK类型
export const getAppType = (): AppType => {
  // 小程序
  // @ts-ignore
  if (typeof wx !== 'undefined') {
    return AppType.WeChat;
  }

  // html5
  if (typeof window !== 'undefined') {
    return AppType.Html5;
  }

  // node
  if (typeof process !== 'undefined') {
    return AppType.NodeJs;
  }

  return AppType.Unknown;
};

export const randomString = (): string => {
  const len8Str = () => {
    return Math.random().toString(36).slice(-8);
  };
  return len8Str() + len8Str();
};

export const httpSign = (
  httpPath: string,
  httpData: object,
  timeStamp: number | string,
  secretKey: string,
  sdkVersion: string,
  randomStr: string,
): string => {
  return md5(httpPath + timeStamp + secretKey + randomStr + JSON.stringify(httpData) + sdkVersion);
};
