import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'

import pkg from './package.json'

export default {
  external: [ 'react' ],
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
    {
      file: pkg.module,
      format: 'es',
    },
  ],
  plugins: [
    resolve({
      module: true,
      browser: true
    }),
    babel(),
    postcss({
      // minimize: true,
      modules: true,
      extract: true,
    }),
  ],
}