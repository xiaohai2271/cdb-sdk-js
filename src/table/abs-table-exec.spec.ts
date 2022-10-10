import { beforeEach, describe, expect, test } from '@jest/globals';
import Hmc from '../index';
import { TableQuery } from './types';
import { WhereCondition } from "../model/command.type";
import { CommandReqModel } from "../model";

let query: TableQuery;
let tableInfo: CommandReqModel;

describe('AbstractTableExec', () => {

  beforeEach(() => {
    query = Hmc.table.query('test');
    // @ts-ignore
    tableInfo = query.tableInfo;
  });

  test('table', () => {
    expect('test').toBe(tableInfo.table);

    query.table('bbb');
    expect('bbb').toBe(tableInfo.table);


    query.table({ name: 'xyz' });
    expect({ name: 'xyz' }).toStrictEqual(tableInfo.table);
  });


  test('where', () => {
    expect(undefined).toBe(tableInfo.where);
    const condition: WhereCondition[] = [
      { column: 't1', op: '=', value: 11 },
    ];
    query.where(condition);
    expect([...condition]).toStrictEqual(tableInfo.where);

    const condition2: WhereCondition[] = [
      { column: 't2', op: '>', value: 22 },
    ];
    query.where(condition2);
    expect([...condition, ...condition2]).toStrictEqual(tableInfo.where);
  });
});
