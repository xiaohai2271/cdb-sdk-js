const {compilerOptions} = require('./tsconfig');
const path = require('path');
module.exports = {
  name: 'sdk',
  testMatch: ['**/+(*.)+(spec|test).+(ts|js)?(x)'],
  transform: {
    '^.+\\.(ts|js|html)$': 'ts-jest'
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageReporters: ['html'],
  globals: {
    'ts-jest': {
      diagnostics: {
        ignoreCodes: [151001] // https://kulshekhar.github.io/ts-jest/user/config/diagnostics
      },
      tsConfig: 'tsconfig.json',
    }
  },
};
