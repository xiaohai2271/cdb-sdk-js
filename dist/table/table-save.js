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
exports.TableSaveImpl = void 0;
var abs_table_exec_1 = require("./abs-table-exec");
var TableSaveImpl = /** @class */ (function (_super) {
    __extends(TableSaveImpl, _super);
    function TableSaveImpl(tableName) {
        return _super.call(this, tableName) || this;
    }
    TableSaveImpl.prototype.getThis = function () {
        return this;
    };
    TableSaveImpl.prototype.entity = function (entity) {
        var _a;
        !((_a = this.tableInfo.columnValue) === null || _a === void 0 ? void 0 : _a.length) && (this.tableInfo.columnValue = []);
        this.tableInfo.columnValue.push(entity);
        return this;
    };
    /**
     * 有where筛选条件则为更新，没有则为新增
     */
    TableSaveImpl.prototype.beforeExec = function () {
        var _a;
        if (!this.tableInfo.type) {
            this.tableInfo.type = 'insert';
            if ((_a = this.tableInfo.where) === null || _a === void 0 ? void 0 : _a.length) {
                this.tableInfo.type = 'update';
            }
        }
    };
    TableSaveImpl.prototype.set = function (field, value) {
        !this.tableInfo.columnValue && (this.tableInfo.columnValue = []);
        if (this.tableInfo.columnValue.length > 1) {
            throw new Error('please use \'entity\' instead of \'set\'');
        }
        var entity = {};
        if (!this.tableInfo.columnValue.length) {
            this.tableInfo.columnValue.push(entity);
        }
        else {
            entity = this.tableInfo.columnValue[0];
        }
        entity[field] = value;
        return this;
    };
    /**
     * 是否为新增数据
     */
    TableSaveImpl.prototype.saveMode = function (saveMode) {
        this.tableInfo.type = saveMode ? 'insert' : 'update';
        return this;
    };
    return TableSaveImpl;
}(abs_table_exec_1.AbstractTableExec));
exports.TableSaveImpl = TableSaveImpl;
