"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var axios_1 = __importDefault(require("axios"));
var config_1 = require("../util/config");
var index_1 = require("./index");
var config = (0, config_1.getConfig)();
var instance = axios_1["default"].create({
    baseURL: config.host
});
var request = function (path, method, params) {
    if (method === void 0) { method = 'get'; }
    if (params === void 0) { params = {}; }
    return new Promise(function (resolve, reject) {
        console.debug('use axios request');
        var cfg = {
            method: method,
            url: path,
            headers: (0, index_1.getHeader)(path, method, params),
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
