const folderName = '7Kyu-RockPaperScissorsOracle';

// Import from here
const fs = require('fs');
// run `rollup -c` to build answer from PROBLEM_FOLDER/main.ts

// No need to touch config
import typescript from 'rollup-plugin-typescript';
import nodeResolve from 'rollup-plugin-node-resolve';
import {terser} from 'rollup-plugin-terser';

// noinspection JSUnusedGlobalSymbols
export default {
    input: `${folderName}/main.ts`,
    treeshake: true,
    output: {
        format: 'iife', // for browser settings set format 'cjs'
        file: `${folderName}/build.js`, // output a single application bundle
        sourceMap: false,
    },
        moduleName: 'oracle',
    plugins: [
        typescript({ exclude: 'node_modules/**'}),
        nodeResolve(),
        terser({
            mangle: {
            reserved: ['oracle'],
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
        generateBundle: (options, bundle, isWrite) => {
            let githubFile = options.file.replace('build.js', 'main.ts')
            setTimeout(() => {
                fs.appendFileSync(options.file, `//  https://github.com/imskojs/toy-problem-rxjs-ramda/blob/master/${githubFile}`);
            }, 100)

        }
    }
}
