"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.httpSign = exports.randomString = exports.getAppType = void 0;
var types_1 = require("../types");
var js_md5_1 = __importDefault(require("js-md5"));
// 获取SDK类型
var getAppType = function () {
    // 小程序
    // @ts-ignore
    if (typeof wx !== 'undefined') {
        return types_1.AppType.WeChat;
    }
    // html5
    if (typeof window !== 'undefined') {
        return types_1.AppType.Html5;
    }
    // node
    if (typeof process !== 'undefined') {
        return types_1.AppType.NodeJs;
    }
    return types_1.AppType.Unknown;
};
exports.getAppType = getAppType;
var randomString = function () {
    var len8Str = function () {
        return Math.random().toString(36).slice(-8);
    };
    return len8Str() + len8Str();
};
exports.randomString = randomString;
var httpSign = function (httpPath, httpData, timeStamp, secretKey, sdkVersion, randomStr) {
    return (0, js_md5_1["default"])(httpPath + timeStamp + secretKey + randomStr + JSON.stringify(httpData) + sdkVersion);
};
exports.httpSign = httpSign;
