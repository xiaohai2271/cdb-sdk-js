import { AppType } from '../types';
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

export const getTypeString = (type: AppType) => {
  if (type === AppType.Html5) {
    // h5
    return 'html5'
  } else if (type === AppType.WeChat) {
    // 小程序
    return 'wechat'
  } else if (type === AppType.NodeJs) {
    // 快应用功能
    return 'nodejs'
  }
  return 'unknown'
}

export const randomString = (): string => {
  const len8Str = () => {
    return Math.random().toString(36).slice(-8);
  };
  return len8Str() + len8Str();
};

