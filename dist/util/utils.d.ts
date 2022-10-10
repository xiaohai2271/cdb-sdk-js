import { AppType } from '../types';
export declare const getAppType: () => AppType;
export declare const getTypeString: (type: AppType) => "html5" | "wechat" | "nodejs" | "unknown";
export declare const randomString: () => string;
