let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const [N, A, M, B] = input.map((v) => v.split(' '));

const arr = new Set(A);

const result = B.map((v) => (arr.has(v) ? 1 : 0));
console.log(result.join('\n'));
