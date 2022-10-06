"use strict";
exports.__esModule = true;
exports.AbstractTableExec = void 0;
var model_1 = require("../model");
var common_1 = require("./common");
var AbstractTableExec = /** @class */ (function () {
    function AbstractTableExec(tableName) {
        this.tableInfo = new model_1.CommandReqModel();
        this.tableInfo.table = { name: tableName };
    }
    AbstractTableExec.prototype.table = function (table) {
        this.tableInfo.table = { name: table.name || table };
        return this.getThis();
    };
    /**
     * 查询的条件
     * @param conditions 条件
     */
    AbstractTableExec.prototype.where = function (conditions) {
        var _a;
        var _b;
        !((_b = this.tableInfo.where) === null || _b === void 0 ? void 0 : _b.length) && (this.tableInfo.where = []);
        (_a = this.tableInfo.where).push.apply(_a, conditions);
        return this.getThis();
    };
    /**
     * 最终地执行函数
     * Notice: 当传入callback 回调函数则不会返回Promise对象，当callback为空时，则以Promise形式返回
     * @param callback 执行的回调函数，
     */
    AbstractTableExec.prototype.exec = function (callback) {
        this.beforeExec();
        var request = (0, common_1.requestCommand)(this.tableInfo);
        if (callback) {
            var result_1 = null;
            var error_1 = null;
            request.then(function (r) { return (result_1 = r); })["catch"](function (e) { return (error_1 = e); }).then(function () { return callback(result_1, error_1); });
            return;
        }
        return request;
    };
    return AbstractTableExec;
}());
exports.AbstractTableExec = AbstractTableExec;
