"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var axios_1 = __importDefault(require("axios"));
var config_1 = require("../util/config");
var request_util_1 = require("../util/request.util");
var config = (0, config_1.getConfig)();
var instance = axios_1["default"].create({
    baseURL: config.host,
    headers: {
        'Content-Type': 'application/json'
    }
});
var request = function (path, method, params) {
    if (method === void 0) { method = 'get'; }
    if (params === void 0) { params = {}; }
    return new Promise(function (resolve, reject) {
        console.debug('use axios request');
        // @ts-ignore
        var headers = __assign({}, (0, request_util_1.getHeader)(path, method, params));
        var cfg = {
            method: method,
            url: path,
            headers: headers,
            params: method === 'get' ? params : undefined,
            data: method !== 'get' ? params : undefined
        };
        instance.request(cfg).then(function (_a) {
            var data = _a.data;
            if ((data.code && data.error) || data.error) {
                reject(data);
                return;
            }
            resolve(data);
        })["catch"](function (e) { return reject(e); });
    });
};
exports["default"] = request;
