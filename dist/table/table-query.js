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
exports.__esModule = true;
exports.TableQueryImpl = void 0;
var abs_table_exec_1 = require("./abs-table-exec");
var TableQueryImpl = /** @class */ (function (_super) {
    __extends(TableQueryImpl, _super);
    function TableQueryImpl(tableName) {
        return _super.call(this, tableName) || this;
    }
    TableQueryImpl.prototype.getThis = function () {
        return this;
    };
    /**
     * 是否开启重复过滤 select <distinct> xxx
     * @param enable 是否开启，默认false 不开启
     */
    TableQueryImpl.prototype.distinct = function (enable) {
        enable && (this.tableInfo.distinct = 'DISTINCT');
        return this;
    };
    /**
     * 将对象作为筛选条件
     * @param entity 筛选条件，默认以‘=’ 做连接
     */
    TableQueryImpl.prototype.entity = function (entity) {
        var _a;
        var _b;
        !((_b = this.tableInfo.where) === null || _b === void 0 ? void 0 : _b.length) && (this.tableInfo.where = []);
        if (entity && Object.keys(entity).length) {
            (_a = this.tableInfo.where).push.apply(_a, Object.keys(entity)
                .map(function (key) { return ({ column: key, op: '=', value: entity[key] }); }));
        }
        return this;
    };
    /**
     * 分页查询
     * @param pageSize 页面数据大小
     * @param pageNumber 页码
     */
    TableQueryImpl.prototype.pageable = function (pageNumber, pageSize) {
        this.tableInfo.offset = (pageNumber - 1) * pageSize;
        this.tableInfo.limit = pageSize;
        return this;
    };
    /**
     * 要查询的字段，默认查询所有字段
     * @param fields 字段名
     */
    TableQueryImpl.prototype.select = function (fields) {
        this.tableInfo.queryFields = fields || [fields];
        return this;
    };
    TableQueryImpl.prototype.having = function (column, op, value) {
        var _a;
        var _b;
        !((_b = this.tableInfo.having) === null || _b === void 0 ? void 0 : _b.length) && (this.tableInfo.having = []);
        if (column && op && value) {
            this.tableInfo.having.push({ column: column, op: op, value: value });
            return this;
        }
        (_a = this.tableInfo.having).push.apply(_a, column);
        return this;
    };
    TableQueryImpl.prototype.include = function (includes) {
        this.tableInfo.include = includes;
        return this;
    };
    TableQueryImpl.prototype.join = function (joins) {
        this.tableInfo.join = joins;
        return this;
    };
    TableQueryImpl.prototype.orderBy = function (column, by) {
        !this.tableInfo.orderBy && (this.tableInfo.orderBy = {});
        if (column.length) {
            this.tableInfo.orderBy[column] = by || 'asc';
            return this;
        }
        this.tableInfo.orderBy = __assign({}, column);
        return this;
    };
    TableQueryImpl.prototype.resultMap = function (resultMap) {
        this.tableInfo.resultMap = resultMap;
        return this;
    };
    /**
     * 执行之前做数据处理
     */
    TableQueryImpl.prototype.beforeExec = function () {
        this.tableInfo.type = 'select';
    };
    return TableQueryImpl;
}(abs_table_exec_1.AbstractTableExec));
exports.TableQueryImpl = TableQueryImpl;
