// run node create PROBLEM_NAME in terminal to craete a problem folder

//  No need to touch this file
const fs = require('fs');
const folderName = `${process.argv[2]}Kyu-${process.argv[3]}`;
const problem = process.argv[4];

fs.mkdirSync(`./src/${folderName}`);
// fs.mkdirSync(`./src/${problem}`);

fs.writeFileSync(`./src/${folderName}/main.js`,
  `import {  } from "rxjs";
import {  } from "rxjs/operators";

export default function ${problem}() {

}`);

const lines = fs.readFileSync('./rollup.config.js').toString().split('\n');
lines.shift()
lines.unshift(`const folderName = '${folderName}';`)
fs.writeFileSync('./rollup.config.js', lines.join('\n'))



