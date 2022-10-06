import { TableSave } from './types';
import { ColumnValueType } from '../model/command.type';
import { AbstractTableExec } from './abs-table-exec';
export declare class TableSaveImpl extends AbstractTableExec<TableSave> implements TableSave {
    constructor(tableName: string);
    getThis(): TableSave;
    entity(entity: ColumnValueType): TableSave;
    /**
     * 有where筛选条件则为更新，没有则为新增
     */
    beforeExec(): void;
    set(field: string, value: any): TableSave;
    /**
     * 是否为新增数据
     */
    saveMode(saveMode: boolean): TableSave;
}
