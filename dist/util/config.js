"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.getConfig = exports.getDefaultConfig = void 0;
var index_1 = __importDefault(require("../index"));
var utils_1 = require("./utils");
var constant_1 = require("../data/constant");
var getDefaultConfig = function () {
    return {
        debug: false,
        host: constant_1.host,
        appType: (0, utils_1.getAppType)(),
        request: {
            applicationKey: '',
            secretKey: '',
            securityCode: ''
        },
        sdkVersion: constant_1.version
    };
};
exports.getDefaultConfig = getDefaultConfig;
/**
 * 获取 SDK 配置信息
 * @return {Object}
 */
var getConfig = function () {
    var instance = index_1["default"];
    if (!instance) {
        return (0, exports.getDefaultConfig)();
    }
    return instance.__config__;
};
exports.getConfig = getConfig;
