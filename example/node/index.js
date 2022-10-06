let HCDB = require('cdb-sdk');
// import HCDB from "cdb-sdk";

// console.log(HCDB)
//
// HCDB.initialize('d735fe2d-0055-4653-9142-a67b66134660', 'e2517ca9-7080-4a14-9fc2-73cc634d580e')
//
// HCDB.table.query('category').exec().then(res => {
//     console.log(res)
//     // console.error(err)
// })
// HCDB.table.query('category').exec((res,err) => {
//     console.log(res)
//     err && console.error(err)
// })


console.log(HCDB)

// 本地
HCDB.initialize('d735fe2d-0055-4653-9142-a67b66134660', 'e2517ca9-7080-4a14-9fc2-73cc634d580e')
// 部署线上
// HCDB.initialize('a9bcd254-1d06-4cc7-9f41-1ff66e2a4a9f', 'eb38551e0ce4-424d-af0f-d29cb7b8643c')

let query = HCDB.table.query('category')
// query.select(['name', 'type']);
query.distinct(true)
query.pageable(1, 2)
query.exec().then(res => {
    console.log(JSON.stringify(res))
}).catch(e => {
    console.error(e)
})

let query1 = HCDB.table.query('__test1')
query1.include([
    {table: 'test2', linkCondition: [{leftCol: '__test1.id', rightCol: '__test2.id'}]}
])
query1.exec((res, err) => {
    console.log(JSON.stringify(res))
    err && console.error(err)
})
