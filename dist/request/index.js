"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var utils_1 = require("../util/utils");
var types_1 = require("../types");
var axios_1 = __importDefault(require("./axios"));
var wechat_1 = __importDefault(require("./wechat"));
var request = function () { return Promise.reject('no request function found'); };
// 获取当前应用类型
var type = (0, utils_1.getAppType)();
var typeString = 'unknown';
if (type === types_1.AppType.Html5) {
    // h5
    request = axios_1["default"];
    typeString = 'html5';
}
else if (type === types_1.AppType.WeChat) {
    // 小程序
    request = wechat_1["default"];
    typeString = 'wechat';
}
else if (type === types_1.AppType.NodeJs) {
    // 快应用功能
    request = axios_1["default"];
    typeString = 'nodejs';
}
exports["default"] = request;
