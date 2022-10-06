import {
  ConditionOperator,
  FunctionColumn,
  HavingCondition,
  OrderByCondition,
  ResultMap,
  Table,
  TableInclude,
  TableJoin,
  WhereCondition,
} from '../model/command.type';

export interface BaseTableExec<T extends BaseTableExec<T>> {
  table(name: string): T;

  table(table: Table): T;

  entity(queryEntity: { [field: string]: any }): T;

  where(conditions: WhereCondition[]): T;

  exec<M>(callback?: (result: M, error: any) => void): Promise<M> | void;
}

export interface TableQuery extends BaseTableExec<TableQuery> {
  select(fields: string[]): TableQuery;

  pageable(pageNumber: number, pageSize: number): TableQuery;

  distinct(enable: boolean): TableQuery;

  orderBy(column: string, by: 'ASC' | 'DESC' | 'asc' | 'desc'): TableQuery;

  orderBy(condition: OrderByCondition): TableQuery;

  having(column: FunctionColumn | string, op: ConditionOperator | string, value: any): TableQuery;

  having(having: HavingCondition[]): TableQuery;

  include(includes: TableInclude[]): TableQuery;

  join(joins: TableJoin[]): TableQuery;

  resultMap(resultMap: ResultMap): TableQuery;
}

export interface TableSave extends BaseTableExec<TableSave> {

  set(field: string, value: any): TableSave;

  /**
   * 是否为新增数据
   */
  saveMode(saveMode: boolean): TableSave;
}


export interface TableDelete extends BaseTableExec<TableDelete> {
}
