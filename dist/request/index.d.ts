import { RequestFunction } from '../types';
import { AxiosRequestHeaders, Method } from 'axios';
declare let request: RequestFunction;
export declare const getHeader: (path: string, method: Method, params: Object) => AxiosRequestHeaders;
export default request;
