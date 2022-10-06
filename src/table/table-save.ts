import { TableSave } from './types';
import { ColumnValueType } from '../model/command.type';
import { AbstractTableExec } from './abs-table-exec';

export class TableSaveImpl extends AbstractTableExec<TableSave> implements TableSave {
  constructor(tableName: string) {
    super(tableName);
  }

  getThis(): TableSave {
    return this;
  }

  entity(entity: ColumnValueType): TableSave {
    !this.tableInfo.columnValue?.length && (this.tableInfo.columnValue = []);
    this.tableInfo.columnValue.push(entity);
    return this;
  }

  /**
   * 有where筛选条件则为更新，没有则为新增
   */
  beforeExec() {
    if (!this.tableInfo.type) {
      this.tableInfo.type = 'insert';
      if (this.tableInfo.where?.length) {
        this.tableInfo.type = 'update';
      }
    }
  }

  set(field: string, value: any): TableSave {
    !this.tableInfo.columnValue && (this.tableInfo.columnValue = []);
    if (this.tableInfo.columnValue.length > 1) {
      throw new Error('please use \'entity\' instead of \'set\'');
    }
    let entity: ColumnValueType = {};
    if (!this.tableInfo.columnValue.length) {
      this.tableInfo.columnValue.push(entity);
    } else {
      entity = this.tableInfo.columnValue[0];
    }
    entity[field] = value;
    return this;
  }

  /**
   * 是否为新增数据
   */
  saveMode(saveMode: boolean): TableSave {
    this.tableInfo.type = 'insert';
    return this;
  }

}
