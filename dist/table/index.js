"use strict";
exports.__esModule = true;
var table_query_1 = require("./table-query");
var table_save_1 = require("./table-save");
var table_delete_1 = require("./table-delete");
var tableExec = {
    query: function (tableName) { return new table_query_1.TableQueryImpl(tableName); },
    save: function (tableName) { return new table_save_1.TableSaveImpl(tableName); },
    del: function (tableName) { return new table_delete_1.TableDeleteImpl(tableName); }
};
exports["default"] = tableExec;
