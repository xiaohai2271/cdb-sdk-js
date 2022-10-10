import { HmcInstance } from '../types';
import { getDefaultConfig, getInstance } from '../util/config';

export const initialize = (secretKey: string, applicationKey: string, securityCode?: string): HmcInstance => {
  let app = getInstance();
  const cfg = getDefaultConfig();
  cfg.request = {
    secretKey,
    applicationKey,
    securityCode,
  };
  app.__config__ = cfg;
  return app;
};
