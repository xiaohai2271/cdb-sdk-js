"use strict";
exports.__esModule = true;
var config_1 = require("../util/config");
var index_1 = require("./index");
var config = (0, config_1.getConfig)();
var request = function (path, method, params) {
    if (method === void 0) { method = 'get'; }
    if (params === void 0) { params = {}; }
    return new Promise(function (resolve, reject) {
        console.debug("use wechat request");
        // @ts-ignore
        wx.request({
            url: config.host + path,
            method: method,
            data: params,
            header: (0, index_1.getHeader)(path, method, params),
            success: function (res) {
                if ((res.data.code && res.data.error) || res.data.error) {
                    reject(res.data);
                }
                resolve(res.data);
            },
            fail: function (e) {
                reject(e);
            }
        });
    });
};
exports["default"] = request;
