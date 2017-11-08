// run node create PROBLEM_NAME in terminal to craete a problem folder

//  No need to touch this file
const fs = require('fs');
const problem = process.argv[2];

fs.mkdirSync(`./src/${problem}`);

fs.writeFileSync(`./src/${problem}/main.js`,
  `import { Observable } from 'rxjs/Observable';

function ${problem}() {

}`);

const lines = fs.readFileSync('./rollup.config.js').toString().split('\n');
lines.shift()
lines.unshift(`const problem = '${problem}';`)
fs.writeFileSync('./rollup.config.js', lines.join('\n'))



