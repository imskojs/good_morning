const folderName = '4Kyu-HumanReadableDurationFormat';

// Import from here
const fs = require('fs');
// run `rollup -c` to build answer from PROBLEM_FOLDER/index.ts

// No need to touch config
import typescript from 'rollup-plugin-typescript';
import nodeResolve from 'rollup-plugin-node-resolve';
import {terser} from 'rollup-plugin-terser';

// noinspection JSUnusedGlobalSymbols
export default {
  input: `${folderName}/index.ts`,
  treeshake: true,
  output: {
    /*outputName*/ name: 'formatDuration',
    file: `${folderName}/build.js`, // output a single application bundle
    format: 'iife', // for browser settings set format 'cjs'
    sourceMap: false,
  },
  plugins: [
    typescript({exclude: 'node_modules/**'}),
    nodeResolve(),
    terser({
      mangle: {
        /*terserMangleReserve*/ reserved: ['formatDuration'],
        module: true,
        toplevel: true
      },
      compress: {
        pure_getters: true,
        arguments: true,
        // drop_console: true,
        ecma: 6,
        keep_fargs: false,
        passes: 1
      }
    }),
    afterBuild()
  ]
};


function afterBuild() {
  return {
    name: 'my-after-build',
    generateBundle: (options /*, bundle, isWrite */) => {
      let githubFile = options.file.replace('build.js', 'index.ts');
      setTimeout(() => {
        fs.appendFileSync(options.file, `//  https://github.com/imskojs/toy-problem-rxjs-ramda/blob/master/${githubFile}`);
      }, 100)

    }
  }
}
