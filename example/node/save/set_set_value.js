import Hmc from "hmc-js-sdk";


const save = Hmc.table.save('category')
save.set("name", "张三")
save.set("age", 10)

save.entity({
    name: '张三',
    age: 10
})


save.where([{column: 'id', op: '=', value: 1}])
