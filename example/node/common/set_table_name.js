import Hmc from "hmc-js-sdk";
// 1. 在调用query的时候指定查询表名
let query1 = Hmc.table.query('category') // 设置表名

// 2. 调用table 方法
let query2 = Hmc.table.query();
query2.table('category');// 设置表名
query2.table({name: 'category'});// 设置表名
