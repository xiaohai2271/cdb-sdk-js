import { TableDelete } from './types';
import { AbstractTableExec } from './abs-table-exec';
export declare class TableDeleteImpl extends AbstractTableExec<TableDelete> implements TableDelete {
    entity(queryEntity: {
        [p: string]: any;
    }): TableDelete;
    beforeExec(): void;
    getThis(): TableDelete;
    constructor(tableName: string);
}
