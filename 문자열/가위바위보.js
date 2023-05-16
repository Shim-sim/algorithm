let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let n = +input.shift();
let a = input[0].split('').map(Number);
let b = input[1].split('').map(Number);
let answer = [];

for (let i = 0; i < a.length; i++) {
  if (a[i] === b[i]) answer.push('D');
  else if (a[i] === 1 && b[i] === 3) answer.push('A');
  else if (a[i] === 2 && b[i] === 1) answer.push('A');
  else if (a[i] === 3 && b[i] === 2) answer.push('A');
  else answer.push('B');
}

console.log(answer.join('\n'));

// input
// 5
// 23313
// 11223
