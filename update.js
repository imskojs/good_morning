const fs = require('fs');
const folderName = process.argv[2];

const lines = fs.readFileSync('./rollup.config.js').toString().split('\n');
lines.shift();
lines.unshift(`const folderName = '${folderName}';`);
fs.writeFileSync('./rollup.config.js', lines.join('\n'));
