"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.getHeader = void 0;
var utils_1 = require("../util/utils");
var types_1 = require("../types");
var config_1 = require("../util/config");
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
var getHeader = function (path, method, params) {
    var _a, _b;
    var config = (0, config_1.getConfig)();
    var t = Math.round(new Date().getTime() / 1000);
    var data = (method === 'get' || method === 'delete') ? {} : params;
    var rand = (0, utils_1.randomString)();
    var sign = (0, utils_1.httpSign)(path, data, t, ((_a = config.request) === null || _a === void 0 ? void 0 : _a.secretKey) || '', config.sdkVersion, rand);
    var header = {
        'content-type': 'application/json',
        'X-HCDB-SDK-Type': typeString,
        'X-HCDB-Safe-Sign': sign,
        'X-HCDB-Safe-Timestamp': t,
        'X-HCDB-Scatter-Key': rand,
        'X-HCDB-SDK-Version': config.sdkVersion,
        'X-HCDB-App-Key': (_b = config.request) === null || _b === void 0 ? void 0 : _b.applicationKey
    };
    console.debug('Create Header', header);
    return header;
};
exports.getHeader = getHeader;
exports["default"] = request;
