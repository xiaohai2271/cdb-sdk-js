import { AppConfig } from '../types';
import Hmc from '../index';
import { getAppType } from './utils';
import { version, host } from '../data/constant';


export const getDefaultConfig = (): AppConfig => {
  return {
    debug: false,
    host: host,
    appType: getAppType(),
    request: {
      applicationKey: '',
      secretKey: '',
      securityCode: '',
    },
    sdkVersion: version,
  };
};

/**
 * 获取 SDK 配置信息
 * @return {Object}
 */
export const getConfig = () => {
  let instance = Hmc;
  if (!instance) {
    return getDefaultConfig();
  }
  return instance.__config__;
};
