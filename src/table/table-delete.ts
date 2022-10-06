import { TableDelete } from './types';
import { AbstractTableExec } from './abs-table-exec';

export class TableDeleteImpl extends AbstractTableExec<TableDelete> implements TableDelete {

  entity(queryEntity: { [p: string]: any }): TableDelete {
    !this.tableInfo.where?.length && (this.tableInfo.where = []);
    return this;
  }

  beforeExec() {
    this.tableInfo.type = 'delete';
  }

  getThis(): TableDelete {
    return this;
  }


  constructor(tableName: string) {
    super(tableName);
  }
}