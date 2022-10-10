"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var table_1 = __importDefault(require("./table"));
var init_1 = require("./init");
var config_1 = require("./util/config");
var Hmc = {
    __config__: (0, config_1.getDefaultConfig)(),
    initialize: init_1.initialize,
    table: table_1["default"]
};
(0, config_1.setInstance)(Hmc);
exports["default"] = Hmc;
module.exports=Hmc