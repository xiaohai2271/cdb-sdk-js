import { getAppType } from '../util/utils';
import { AppType, RequestFunction } from '../types';
import axiosRequest from './axios';
import wxRequest from './wechat';

let request: RequestFunction = () => Promise.reject('no request function found');

// 获取当前应用类型
const type = getAppType();
let typeString = 'unknown'
if (type === AppType.Html5) {
// h5
  request = axiosRequest;
  typeString = 'html5'
} else if (type === AppType.WeChat) {
  // 小程序
  request = wxRequest;
  typeString = 'wechat'
} else if (type === AppType.NodeJs) {
  // 快应用功能
  request = axiosRequest;
  typeString = 'nodejs'
}


export default request;
