let Hmc = require('../../dist/index');

Hmc.initialize('你的secretKey', '你的applicationKey')

let query = Hmc.table.query('category')
// query.select(['name', 'type']);
query.distinct(true)
query.pageable(1, 2)
query.exec().then(res => {
    console.log(JSON.stringify(res))
}).catch(e => {
    console.error(e)
})
