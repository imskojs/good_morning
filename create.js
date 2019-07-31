// run node create PROBLEM_NAME in terminal to create a problem folder

//  No need to touch this file
const fs = require('fs');
const folderName = `${process.argv[2]}Kyu-${process.argv[3]}`;
const problem = process.argv[4];
const problemFunctionName =
  `const ${problem} = () => {

};

export default ${problem};
`;

fs.mkdirSync(`./${folderName}`);

fs.writeFileSync(`./${folderName}/index.ts`, problemFunctionName);

const lines = fs.readFileSync('./rollup.config.js')
  .toString()
  .split('\n');
lines.shift();
lines.unshift(`const folderName = '${folderName}';`);

fs.writeFileSync('./rollup.config.js', lines.join('\n'));
let content = fs.readFileSync('./rollup.config.js').toString();
content = content.replace(
  /^.*outputName.*$/mg,
  `    /*outputName*/ name: '${problem}',`
);
content = content.replace(
  /^.*terserMangleReserve.*$/mg,
  `        /*terserMangleReserve*/ reserved: ['${problem}'],`
);

fs.writeFileSync('./rollup.config.js', content);



