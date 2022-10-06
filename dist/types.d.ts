import { TableDelete, TableQuery, TableSave } from './table/types';
import { Method } from 'axios';
export interface Table {
    query: (tableName: string) => TableQuery;
    save: (tableName: string) => TableSave;
    del: (tableName: string) => TableDelete;
}
export interface RequestConfig {
    secretKey?: string;
    applicationKey?: string;
    securityCode?: string;
}
export declare enum AppType {
    WeChat = 0,
    Html5 = 1,
    NodeJs = 2,
    Unknown = 3
}
export interface AppConfig {
    debug: boolean;
    host: string;
    appType: AppType;
    request?: RequestConfig;
    sdkVersion: string;
}
export interface HmcInstance {
    __config__: AppConfig;
    initialize: (secretKey: string, applicationKey: string, securityCode?: string) => HmcInstance;
    table: Table;
}
export declare type RequestFunction = (path: string, method?: Method, params?: Object) => Promise<any>;
