import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import ts from 'rollup-plugin-typescript2'
import {terser} from 'rollup-plugin-terser'
import commonjs from 'rollup-plugin-commonjs';
import {version} from './package.json';

export default {
  input: 'src/index.ts',
  output: [{
    file: `dist/hmc-${version}.min.js`,
    format: 'umd',
    name: 'Hmc',
  }],
  plugins: [
    json(),
    commonjs(),
    ts({
      tsconfig: "tsconfig.rollup.json",
    }),
    babel({exclude: 'node_modules/**'}),
    resolve({
      browser: true
    }),
    terser({
      compress: {drop_console: true}
    }),
  ]
};
