import { HmcInstance } from '../types';
import { getDefaultConfig } from '../util/config';
import Hmc from '../index';

export const initialize = (secretKey: string, applicationKey: string, securityCode?: string): HmcInstance => {
  let app = Hmc;
  const cfg = getDefaultConfig();
  cfg.request = {
    secretKey,
    applicationKey,
    securityCode,
  };
  app.__config__ = cfg;
  return app;
};
