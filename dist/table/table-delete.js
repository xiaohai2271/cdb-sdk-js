"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.TableDeleteImpl = void 0;
var abs_table_exec_1 = require("./abs-table-exec");
var TableDeleteImpl = /** @class */ (function (_super) {
    __extends(TableDeleteImpl, _super);
    function TableDeleteImpl(tableName) {
        return _super.call(this, tableName) || this;
    }
    TableDeleteImpl.prototype.entity = function (queryEntity) {
        var _a;
        !((_a = this.tableInfo.where) === null || _a === void 0 ? void 0 : _a.length) && (this.tableInfo.where = []);
        return this;
    };
    TableDeleteImpl.prototype.beforeExec = function () {
        this.tableInfo.type = 'delete';
    };
    TableDeleteImpl.prototype.getThis = function () {
        return this;
    };
    return TableDeleteImpl;
}(abs_table_exec_1.AbstractTableExec));
exports.TableDeleteImpl = TableDeleteImpl;
