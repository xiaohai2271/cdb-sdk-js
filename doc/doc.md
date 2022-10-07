# SDK使用文档

## 安装使用

安装使用

1. 整个SDK，就dist目录下hmc.*.js 这个文件即可使用全部功能
2. 目前支持微信小程序、H5

### 1. 引入

#### 1.1 压缩包引入

```javascript
let Hmc = require('/lib/hmc-x.x.x.min.js');
```

#### 1.2 源码引入（nodejs必须源码引入）

```javascript
let Hmc = require('hmc-js-sdk');
```

#### 1.3 使用npm

**1.3.1 安装**

```shell
npm install hmc-js-sdk
```

**1.3.2 引入**

```javascript
import Hmc from "hmc-js-sdk";
```

**1.3.3 问题**

1. 如果报如下错误信息

```log
import Hmc from "hmc-js-sdk";
^^^^^^

SyntaxError: Cannot use import statement outside a module
```

请在`package.json`中设置`"type": "module"`

### 2.示例

```typescript
import Hmc from "hmc-js-sdk";

console.log(Hmc)

Hmc.initialize('你的secretKey', '你的applicationKey')

Hmc.table.query('category').exec().then(res => {
  console.log(res)
  // console.error(err)
})
Hmc.table.query('category').exec((res, err) => {
  console.log(res)
  err && console.error(err)
})
```

## 数据表操作

> 如果你有一丢丢的sql基础，那么你使用本sdk会非常容易上手，sdk是依据sql语言规范来实现的，尽量使用对象结构来表现一个sql语句

使用`Hmc.table`即可进入数据查询状态，对应其多种查询方法

Hmc.table 的类型为 `Table`, 具有以下属性方法

```typescript
export interface Table {
  query: (tableName: string) => TableQuery;
  save: (tableName: string) => TableSave;
  del: (tableName: string) => TableDelete;
}
```

### 查询数据



#### 设置查询的数据表表名

1. 在调用query的时候传入查询表名

```javascript
let query = Hmc.table.query('category') // 设置表名
query.exec().then(res => {
    console.log(res)
}).catch(e => {
    console.error(e)
})
```

2. 调用`table` 方法

table(name: string): TableQuery;

```javascript
let query = Hmc.table.query();
query.table('category');// 设置表名
query.exec().then(res => {
    console.log(res)
}).catch(e => {
    console.error(e)
})

```

#### 添加查询条件

1 将 queryEntity 添加为 where 查询条件，且默认为 等值运算，即 field = value entity(queryEntity: { [field: string]: any }): TableQuery;

```javascript
let query = Hmc.table.query('category')
// 添加查询添加，将传入对象转换为where条件
query.entity({
    name: '工资1'
})
query.exec().then(res => {
    console.log(JSON.stringify(res))
}).catch(e => {
    console.error(e)
})
```

2 设置where查询添加，可与 queryEntity 同用，查询条件会追加 where(conditions: WhereCondition[]): TableQuery;

```javascript
let query = Hmc.table.query('category')
// 设置where查询条件，该函数入参为数组
query.where([{
    column: 'name',
    op: '=',
    value: '工资'
}])
query.exec().then(res => {
    console.log(JSON.stringify(res))
}).catch(e => {
    console.error(e)
})
```

#### 设置待查询的字段

>  默认为 * 查表所有字段

select(fields: string[]): TableQuery;

```javascript
let query = Hmc.table.query('category')
query.select(['name', 'type']) // 查询name和type字段
query.exec().then(res => {
    console.log(JSON.stringify(res))
}).catch(e => {
    console.error(e)
})
```

#### 设置分页，传入页码和页面数据大小

pageable(pageNumber: number, pageSize: number): TableQuery;

```javascript
let query = Hmc.table.query('category')
query.pageable(1, 2) // 设置第一页 查两条数据
query.exec().then(res => {
    console.log(JSON.stringify(res))
}).catch(e => {
    console.error(e)
})
```

#### 设置查询结果是否去重，默认不去重

distinct(enable: boolean): TableQuery;

```javascript
let query = Hmc.table.query('category')
query.select(['name']);
query.distinct(true) // 设置去重
query.exec().then(res => {
    console.log(JSON.stringify(res))
}).catch(e => {
    console.error(e)
})
```

#### 执行查询

exec<M>(callback?: (result: any, error: any) => void): Promise<M> | void;
该方法接受一个回调函数入参，或者返回一个Promise对象，当传入回调函数时返回void，否则返回Promise对象

```javascript
let query = Hmc.table.query('category')
// 返回Promise对象
query.exec().then(res => {
    console.log(JSON.stringify(res))
}).catch(e => {
    console.error(e)
})
// 回调函数
query.exec((res, err) => {
    console.log(JSON.stringify(res))
    err && console.error(err)
})
```
### 删除数据
#### 设置表名
同 **查询数据** 中的设置表名

table(name: string): T;

#### 添加查询条件
同 **查询数据** 中的添加查询添加

entity(queryEntity: { [field: string]: any }): T;

##### 添加查询条件
同 **查询数据** 中的添加查询添加

where(conditions: WhereCondition[]): T;

### 新增数据

### 修改数据

