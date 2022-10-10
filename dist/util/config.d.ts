import { AppConfig, HmcInstance } from '../types';
export declare const getDefaultConfig: () => AppConfig;
export declare const setInstance: (instance: HmcInstance) => void;
export declare const getInstance: () => HmcInstance;
/**
 * 获取 SDK 配置信息
 * @return {Object}
 */
export declare const getConfig: () => AppConfig;
