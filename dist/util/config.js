"use strict";
exports.__esModule = true;
exports.getConfig = exports.getInstance = exports.setInstance = exports.getDefaultConfig = void 0;
var utils_1 = require("./utils");
var constant_1 = require("../data/constant");
var _instance;
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
var setInstance = function (instance) {
    _instance = instance;
};
exports.setInstance = setInstance;
var getInstance = function () { return _instance; };
exports.getInstance = getInstance;
/**
 * 获取 SDK 配置信息
 * @return {Object}
 */
var getConfig = function () {
    if (!_instance) {
        return (0, exports.getDefaultConfig)();
    }
    return _instance.__config__;
};
exports.getConfig = getConfig;
