import { Method } from "axios";
export declare const httpSign: (httpPath: string, httpData: object, timeStamp: number | string, secretKey: string, sdkVersion: string, randomStr: string) => string;
export declare const getHeader: (path: string, method: Method, params: Object) => {
    'Content-Type': string;
    'X-HCDB-SDK-Type': string;
    'X-HCDB-Safe-Sign': string;
    'X-HCDB-Safe-Timestamp': number;
    'X-HCDB-Scatter-Key': string;
    'X-HCDB-SDK-Version': string;
    'X-HCDB-App-Key': string | undefined;
};
