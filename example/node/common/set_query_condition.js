import Hmc from "hmc-js-sdk";

let query = Hmc.table.query('category')
// 添加查询添加，将传入对象转换为where条件
query.entity({
    id: 1,
    amount: 1000,
    name: '工资'
})
//
query.where([
    {column: 'id', op: '=', value: 1},
    {column: 'amount', op: '=', value: 1000},
    {column: 'name', op: '=', value: '工资'}
])
