import Hmc from "hmc-js-sdk";

let query = Hmc.table.query('category')
query.select(['name', 'type']) // 查询name和type字段

query.select(['*']) // 查询所有字段，默认
