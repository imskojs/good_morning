const folderName = '7Kyu-RecursiveReplication';

// Import from here
const fs = require('fs');
// run `rollup -c` to build answer from PROBLEM_FOLDER/main.ts

// No need to touch config
import typescript from 'rollup-plugin-typescript';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import {terser} from 'rollup-plugin-terser';

// noinspection JSUnusedGlobalSymbols
export default {
    input: `${folderName}/main.ts`,
    output: {
        format: 'cjs', // for browser settings set format 'iife'
        file: `${folderName}/build.js`, // output a single application bundle
        sourceMap: false,
    },
    // moduleName: 'funcNameToBeOnWindow',  // for browser settings uncomment this
    onwarn: function (warning) {
        console.warn(warning.message);
    },
    plugins: [
        typescript(),
        nodeResolve({jsnext: true, module: true}),
        commonjs(),
        terser({
            mangle: {
                // reserved: [],
                // // If below option is used then it will break
                // module: true,
                // toplevel: true
            },
            compress: {
                arguments: true,
                drop_console: true,
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
