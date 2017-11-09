const problem = 'removeChar';

// run `rollup -c` to build answer from PROBLEM_FOLDER/main.js

// No need to touch config
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';
import { minify } from 'uglify-es';

export default {
  entry: `src/${problem}/main.js`,
  dest: `src/${problem}/build.js`, // output a single application bundle
  sourceMap: false,
  format: 'cjs', // for browser settings set format 'iife'
  // moduleName: 'funcNameToBeOnWindow',  // for browser settings uncomment this 
  onwarn: function (warning) {
    console.warn(warning.message);
  },
  plugins: [
    nodeResolve({ jsnext: true, module: true }),
    commonjs({ include: ['node_modules/rxjs/**', 'node_modules/ramda/**'] }),
    uglify({}, minify)
  ]
};