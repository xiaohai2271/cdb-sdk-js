import Hmc from "hmc-js-sdk";

let query = Hmc.table.query('category')
query.orderBy({id: "desc"}) // id 降序
query.orderBy('name', "asc") // name 升序
