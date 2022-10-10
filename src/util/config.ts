import { AppConfig, HmcInstance } from '../types';
import { getAppType } from './utils';
import { version, host } from '../data/constant';

let _instance: HmcInstance;

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
export const setInstance = (instance: HmcInstance) => {
  _instance = instance;
}
export const getInstance = () => _instance;

/**
 * 获取 SDK 配置信息
 * @return {Object}
 */
export const getConfig = () => {
  if (!_instance) {
    return getDefaultConfig();
  }
  return _instance.__config__;
};
