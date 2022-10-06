import {
  ColumnValueType,
  CommandType,
  FunctionColumn,
  HavingCondition,
  OrderByCondition,
  ResultMap,
  Table,
  TableInclude,
  TableJoin,
  WhereCondition,
} from './command.type';


export class CommandReqModel {
  type: CommandType | null = null;
  table?: Table;
  where?: WhereCondition[];
  // =====select statement======
  distinct?: 'ALL' | 'DISTINCT'; // default null === 'all'
  queryFields?: (string | FunctionColumn)[];
  resultMap?: ResultMap;
  orderBy?: OrderByCondition;
  groupBy?: (FunctionColumn | string)[];
  having?: HavingCondition[];
  limit?: number;
  offset?: number;
  include?: TableInclude[];
  join?: TableJoin[];
  // =====update statement======
  // =====insert statement======
  columnValue?: ColumnValueType[];
  // =====delete statement======
}
