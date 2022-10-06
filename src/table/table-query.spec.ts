import { describe, expect, test } from '@jest/globals';
import { TableQueryImpl } from './table-query';
import Hmc from '../index';


const tableQuery = Hmc.table.query('test');

// @ts-ignore
const tableInfo = tableQuery.tableInfo;

describe('TableQueryImpl', () => {
  test('pageable', () => {
    tableQuery.pageable(1, 10);
    expect(10).toBe(tableInfo.limit);
    expect(0).toBe(tableInfo.offset);

    tableQuery.pageable(5, 20);
    expect(20).toBe(tableInfo.limit);
    expect(80).toBe(tableInfo.offset);


    tableQuery.pageable(5, 6);
    expect(6).toBe(tableInfo.limit);
    expect(24).toBe(tableInfo.offset);
  });
});