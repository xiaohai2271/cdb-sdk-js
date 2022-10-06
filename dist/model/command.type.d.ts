export declare type CommandType = 'insert' | 'delete' | 'update' | 'select';
export declare type Table = {
    name: string;
    as?: string;
};
export interface ConditionOperator {
    name: string;
}
export interface WhereCondition extends ColumnValue {
    op: ConditionOperator | string;
}
export declare type CommonSQLFunction = 'concat' | 'now';
export declare type MySQLFunction = CommonSQLFunction | undefined;
export declare type PgSQLFunction = CommonSQLFunction | undefined;
export declare type FunctionColumn = {
    function?: MySQLFunction | PgSQLFunction;
    args: string[];
};
export declare type OrderByCondition = {
    [column: string]: 'ASC' | 'DESC' | 'asc' | 'desc';
};
export declare type ResultMap = {
    [column: string]: string;
};
export interface HavingCondition {
    column: FunctionColumn | string;
    op: ConditionOperator | string;
    value: any;
}
export interface ColumnValue {
    column: string;
    value: any;
}
export interface LinkCondition {
    leftCol: string;
    rightCol: string;
}
export interface TableInclude {
    primeval?: boolean;
    table: (Table | string);
    linkCondition?: LinkCondition[];
}
export declare type JoinType = 'INNER' | 'LEFT' | 'RIGHT' | 'FULL' | 'inner' | 'left' | 'right' | 'full';
export interface JoinLinkCondition {
    tableField: string;
    joinField: string;
}
export interface TableJoin {
    type: JoinType;
    primeval?: boolean;
    table: Table;
    on: JoinLinkCondition[];
}
export declare type ColumnValueType = {
    [column: string]: any;
};
export interface ResponseMsg<T> {
    code: number;
    message: string;
    data: T;
}
