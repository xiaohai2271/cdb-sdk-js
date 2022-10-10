"use strict";
exports.__esModule = true;
exports.initialize = void 0;
var config_1 = require("../util/config");
var initialize = function (secretKey, applicationKey, securityCode) {
    var app = (0, config_1.getInstance)();
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
