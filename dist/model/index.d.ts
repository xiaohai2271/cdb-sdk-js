import { ColumnValueType, CommandType, FunctionColumn, HavingCondition, OrderByCondition, ResultMap, Table, TableInclude, TableJoin, WhereCondition } from './command.type';
export declare class CommandReqModel {
    type: CommandType | null;
    table?: Table;
    where?: WhereCondition[];
    distinct?: 'ALL' | 'DISTINCT';
    queryFields?: (string | FunctionColumn)[];
    resultMap?: ResultMap;
    orderBy?: OrderByCondition;
    groupBy?: (FunctionColumn | string)[];
    having?: HavingCondition[];
    limit?: number;
    offset?: number;
    include?: TableInclude[];
    join?: TableJoin[];
    columnValue?: ColumnValueType[];
}
