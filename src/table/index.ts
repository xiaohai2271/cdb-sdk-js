import { Table } from '../types';
import { TableQueryImpl } from './table-query';
import { TableSaveImpl } from './table-save';
import { TableDeleteImpl } from './table-delete';


const tableExec: Table = {
  query: (tableName: string) => new TableQueryImpl(tableName),
  save: (tableName:string) => new TableSaveImpl(tableName),
  del: (tableName:string) => new TableDeleteImpl(tableName)
};

export default tableExec;
