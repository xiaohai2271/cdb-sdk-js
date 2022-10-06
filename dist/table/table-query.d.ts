import { TableQuery } from './types';
import { ConditionOperator, FunctionColumn, HavingCondition, OrderByCondition, ResultMap, TableInclude, TableJoin } from '../model/command.type';
import { AbstractTableExec } from './abs-table-exec';
export declare class TableQueryImpl extends AbstractTableExec<TableQuery> implements TableQuery {
    constructor(tableName: string);
    getThis(): TableQuery;
    /**
     * 是否开启重复过滤 select <distinct> xxx
     * @param enable 是否开启，默认false 不开启
     */
    distinct(enable: boolean): TableQuery;
    /**
     * 将对象作为筛选条件
     * @param entity 筛选条件，默认以‘=’ 做连接
     */
    entity(entity: {
        [field: string]: any;
    }): TableQuery;
    /**
     * 分页查询
     * @param pageSize 页面数据大小
     * @param pageNumber 页码
     */
    pageable(pageNumber: number, pageSize: number): TableQuery;
    /**
     * 要查询的字段，默认查询所有字段
     * @param fields 字段名
     */
    select(fields: (string | FunctionColumn)[] | string): TableQuery;
    having(column: FunctionColumn | string, op: ConditionOperator | string, value: any): TableQuery;
    having(having: HavingCondition[]): TableQuery;
    include(includes: TableInclude[]): TableQuery;
    join(joins: TableJoin[]): TableQuery;
    orderBy(column: string, by: 'ASC' | 'DESC' | 'asc' | 'desc'): TableQuery;
    orderBy(condition: OrderByCondition): TableQuery;
    resultMap(resultMap: ResultMap): TableQuery;
    /**
     * 执行之前做数据处理
     */
    beforeExec(): void;
}
