import { CommandReqModel } from '../model';
import { requestCommand } from './common';
import { BaseTableExec } from './types';
import { Table, WhereCondition } from "../model/command.type";

export abstract class AbstractTableExec<T extends BaseTableExec<T>> implements BaseTableExec<T> {
  protected tableInfo: CommandReqModel = new CommandReqModel();

  protected constructor(tableName: string) {
    this.tableInfo.table = { name: tableName };
  }

  /**
   * 查询的数据表表名
   * @param name
   */
  table(name: string): T;
  table(table: Table): T;
  table(table: string | Table): T {
    this.tableInfo.table = { name: (table as Table).name || table as string };
    return this.getThis();
  }


  /**
   * 查询的条件
   * @param conditions 条件
   */
  where(conditions: WhereCondition[]): T {
    !this.tableInfo.where?.length && (this.tableInfo.where = []);
    this.tableInfo.where.push(...conditions);
    return this.getThis();
  }

  /**
   * 将对象作为筛选条件 / 或者 update/save 时的entity
   * @param queryEntity 筛选条件，默认以‘=’ 做连接
   */
  abstract entity(queryEntity: { [field: string]: any }): T;

  abstract beforeExec(): void;

  /**
   * 最终地执行函数
   * Notice: 当传入callback 回调函数则不会返回Promise对象，当callback为空时，则以Promise形式返回
   * @param callback 执行的回调函数，
   */
  exec<M>(callback?: (result: any, error: any) => void): Promise<M> | void {
    this.beforeExec();
    let request = requestCommand(this.tableInfo);
    if (callback) {
      let result: any = null;
      let error: any = null;
      request.then(r => (result = r)).catch(e => (error = e)).then(() => callback(result, error));
      return;
    }
    return request as Promise<M>;
  }

  /**
   * 获取T的实例
   */
  abstract getThis(): T;

}
