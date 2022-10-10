import table from './table';
import { initialize } from './init';
import { getDefaultConfig, setInstance } from './util/config';
import { HmcInstance } from './types';

const Hmc: HmcInstance = {
  __config__: getDefaultConfig(),
  initialize,
  table,
};

setInstance(Hmc);

export default Hmc;
