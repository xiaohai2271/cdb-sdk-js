"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.initialize = void 0;
var config_1 = require("../util/config");
var index_1 = __importDefault(require("../index"));
var initialize = function (secretKey, applicationKey, securityCode) {
    var app = index_1["default"];
    var cfg = (0, config_1.getDefaultConfig)();
    cfg.request = {
        secretKey: secretKey,
        applicationKey: applicationKey,
        securityCode: securityCode
    };
    app.__config__ = cfg;
    return app;
};
exports.initialize = initialize;
