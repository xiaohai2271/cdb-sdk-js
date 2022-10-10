import Hmc from "hmc-js-sdk";

// console.log(Hmc)
//
// Hmc.initialize('d735fe2d-0055-4653-9142-a67b66134660', 'e2517ca9-7080-4a14-9fc2-73cc634d580e')
//
// Hmc.table.query('category').exec().then(res => {
//     console.log(res)
//     // console.error(err)
// })
// Hmc.table.query('category').exec((res,err) => {
//     console.log(res)
//     err && console.error(err)
// })


// console.log(Hmc)

// 本地
// Hmc.initialize('d735fe2d-0055-4653-9142-a67b66134660', 'e2517ca9-7080-4a14-9fc2-73cc634d580e')
// 部署线上

console.log(Hmc);

Hmc.initialize('d23ccedac4cb49fb9929b3ad140a8395', 'd9f09952-8b5b-4517-affe-209061cbc9dd')

let query = Hmc.table.query('category')
// query.select(['name', 'type']);
query.distinct(true)
query.pageable(1, 2)
query.exec().then(res => {
    console.log(JSON.stringify(res))
}).catch(e => {
    console.error(e)
})

let query1 = Hmc.table.query('__test1')
query1.include([
    {table: 'test2', linkCondition: [{leftCol: '__test1.id', rightCol: '__test2.id'}]}
])
query1.exec((res, err) => {
    console.log(JSON.stringify(res))
    err && console.error(err)
})
