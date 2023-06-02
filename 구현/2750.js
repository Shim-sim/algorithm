const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [n, ...num] = fs.readFileSync(filePath).toString().trim().split('\n');

const arr = num.map(Number).sort((a, b) => a - b);
const result = new Set(arr);
console.log(Array.from(result).join('\n'));
