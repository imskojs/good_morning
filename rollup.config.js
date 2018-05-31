const folderName = '6Kyu-MultiplesOf3Or5';

// run `rollup -c` to build answer from PROBLEM_FOLDER/main.js

// No need to touch config
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';
import { minify } from 'uglify-es';

export default {
  input: `src/${folderName}/main.js`,
  output: {
    format: 'cjs', // for browser settings set format 'iife'
    file: `src/${folderName}/build.js`, // output a single application bundle
    sourceMap: false,
  },
  // moduleName: 'funcNameToBeOnWindow',  // for browser settings uncomment this 
  onwarn: function (warning) {
    console.warn(warning.message);
  },
  plugins: [
    nodeResolve({ jsnext: true, module: true }),
    commonjs(),
    uglify({}, minify)
  ]
};