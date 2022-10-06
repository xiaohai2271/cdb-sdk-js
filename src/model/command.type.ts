export type CommandType = 'insert' | 'delete' | 'update' | 'select';
export type Table = {
  name: string;
  as?: string;
}


// TODO: 完善ConditionOperator
export interface ConditionOperator {
  name: string;
}

export interface WhereCondition extends ColumnValue {
  op: ConditionOperator | string,
}

// TODO: 完善CommonSQLFunction
export type CommonSQLFunction =
  'concat' |
  'now';


// fixme: 完善MySQLFunction
export type MySQLFunction = CommonSQLFunction | undefined;

// fixme: 完善PgSQLFunction
export type PgSQLFunction = CommonSQLFunction | undefined;

export type FunctionColumn = {
  function?: MySQLFunction | PgSQLFunction,
  args: string[]
};

export type OrderByCondition = {
  [column: string]: 'ASC' | 'DESC' | 'asc' | 'desc',
};

export type ResultMap = {
  [column: string]: string
}

export interface HavingCondition {
  column: FunctionColumn | string,
  op: ConditionOperator | string,
  value: any
}


export interface ColumnValue {
  column: string,
  value: any
}

export interface LinkCondition {
  leftCol: string;
  rightCol: string;
}

export interface TableInclude {
  primeval?: boolean,
  table: (Table | string);
  linkCondition?: LinkCondition[];
}


export type JoinType = 'INNER' | 'LEFT' | 'RIGHT' | 'FULL'
  | 'inner' | 'left' | 'right' | 'full';

export interface JoinLinkCondition {
  tableField: string,
  joinField: string
}

export interface TableJoin {
  type: JoinType;
  primeval?: boolean;
  table: Table;
  on: JoinLinkCondition[];
}

// export  FunctionGroupBy  = FunctionColumn

export type ColumnValueType = { [column: string]: any };


export interface ResponseMsg<T> {
  code: number;
  message: string;
  data: T;
}
