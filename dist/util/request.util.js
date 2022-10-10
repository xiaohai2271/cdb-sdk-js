"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.getHeader = exports.httpSign = void 0;
var config_1 = require("./config");
var utils_1 = require("./utils");
var crypto_js_1 = __importDefault(require("crypto-js"));
var httpSign = function (httpPath, httpData, timeStamp, secretKey, sdkVersion, randomStr) {
    return crypto_js_1["default"].MD5(httpPath + timeStamp + secretKey + randomStr + JSON.stringify(httpData) + sdkVersion).toString();
};
exports.httpSign = httpSign;
var getHeader = function (path, method, params) {
    var _a, _b;
    var config = (0, config_1.getConfig)();
    var t = Math.round(new Date().getTime() / 1000);
    var data = (method === 'get' || method === 'delete') ? {} : params;
    var rand = (0, utils_1.randomString)();
    var sign = (0, exports.httpSign)(path, data, t, ((_a = config.request) === null || _a === void 0 ? void 0 : _a.secretKey) || '', config.sdkVersion, rand);
    var header = {
        'Content-Type': 'application/json',
        'X-HCDB-SDK-Type': (0, utils_1.getTypeString)((0, utils_1.getAppType)()),
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
