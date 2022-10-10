"use strict";
exports.__esModule = true;
exports.randomString = exports.getTypeString = exports.getAppType = void 0;
var types_1 = require("../types");
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
var getTypeString = function (type) {
    if (type === types_1.AppType.Html5) {
        // h5
        return 'html5';
    }
    else if (type === types_1.AppType.WeChat) {
        // 小程序
        return 'wechat';
    }
    else if (type === types_1.AppType.NodeJs) {
        // 快应用功能
        return 'nodejs';
    }
    return 'unknown';
};
exports.getTypeString = getTypeString;
var randomString = function () {
    var len8Str = function () {
        return Math.random().toString(36).slice(-8);
    };
    return len8Str() + len8Str();
};
exports.randomString = randomString;
