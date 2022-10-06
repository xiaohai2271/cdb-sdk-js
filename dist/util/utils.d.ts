import { AppType } from '../types';
export declare const getAppType: () => AppType;
export declare const randomString: () => string;
export declare const httpSign: (httpPath: string, httpData: object, timeStamp: number | string, secretKey: string, sdkVersion: string, randomStr: string) => string;
