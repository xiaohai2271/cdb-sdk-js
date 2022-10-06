import { TableQuery } from './types';
import {
  ConditionOperator,
  FunctionColumn,
  HavingCondition,
  OrderByCondition,
  ResultMap,
  TableInclude,
  TableJoin,
} from '../model/command.type';
import { AbstractTableExec } from './abs-table-exec';

export class TableQueryImpl extends AbstractTableExec<TableQuery> implements TableQuery {

  constructor(tableName: string) {
    super(tableName);
  }

  getThis(): TableQuery {
    return this;
  }

  /**
   * 是否开启重复过滤 select <distinct> xxx
   * @param enable 是否开启，默认false 不开启
   */
  distinct(enable: boolean): TableQuery {
    enable && (this.tableInfo.distinct = 'DISTINCT');
    return this;
  }

  /**
   * 将对象作为筛选条件
   * @param entity 筛选条件，默认以‘=’ 做连接
   */
  entity(entity: { [field: string]: any }): TableQuery {
    !this.tableInfo.where?.length && (this.tableInfo.where = []);
    if (entity && Object.keys(entity).length) {
      this.tableInfo.where.push(
          ...Object.keys(entity)
              .map(key => ({ column: key, op: '=', value: entity[key] })),
      );
    }
    return this;
  }

  /**
   * 分页查询
   * @param pageSize 页面数据大小
   * @param pageNumber 页码
   */
  pageable(pageNumber: number, pageSize: number): TableQuery {
    this.tableInfo.offset = (pageNumber - 1) * pageSize;
    this.tableInfo.limit = pageSize;
    return this;
  }

  /**
   * 要查询的字段，默认查询所有字段
   * @param fields 字段名
   */
  select(fields: (string | FunctionColumn)[] | string): TableQuery {
    this.tableInfo.queryFields = fields as string[] || [fields as string];
    return this;
  }

  having(column: FunctionColumn | string, op: ConditionOperator | string, value: any): TableQuery;
  having(having: HavingCondition[]): TableQuery;
  having(column: FunctionColumn | string | HavingCondition[], op?: ConditionOperator | string, value?: any): TableQuery {
    !this.tableInfo.having?.length && (this.tableInfo.having = []);
    if (column && op && value) {
      this.tableInfo.having.push({ column: column as (FunctionColumn | string), op, value });
      return this;
    }
    this.tableInfo.having.push(...column as HavingCondition[]);
    return this;
  }

  include(includes: TableInclude[]): TableQuery {
    this.tableInfo.include = includes;
    return this;
  }

  join(joins: TableJoin[]): TableQuery {
    this.tableInfo.join = joins;
    return this;
  }

  orderBy(column: string, by: 'ASC' | 'DESC' | 'asc' | 'desc'): TableQuery;
  orderBy(condition: OrderByCondition): TableQuery;
  orderBy(column: string | OrderByCondition, by?: 'ASC' | 'DESC' | 'asc' | 'desc'): TableQuery {
    !this.tableInfo.orderBy && (this.tableInfo.orderBy = {});
    if ((column as string).length) {
      this.tableInfo.orderBy[column as string] = by || 'asc';
      return this;
    }
    this.tableInfo.orderBy = {
      ...column as OrderByCondition,
    };
    return this;
  }

  resultMap(resultMap: ResultMap): TableQuery {
    this.tableInfo.resultMap = resultMap;
    return this;
  }

  /**
   * 执行之前做数据处理
   */
  beforeExec() {
    this.tableInfo.type = 'select';
  }
}
