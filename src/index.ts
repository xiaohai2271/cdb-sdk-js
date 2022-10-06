import table from './table';
import { initialize } from './init';
import { getDefaultConfig } from './util/config';
import { HmcInstance } from './types';

const Hmc: HmcInstance = {
  __config__: getDefaultConfig(),
  initialize,
  table,
};

module.exports = Hmc;

export default Hmc;