const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [n, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

const answer = [];
for (let i = 1; i <= n; i++) {
  const [a, b] = input[i - 1].split(' ').map(Number);
  answer.push(`Case #${i}: ${a + b}`);
}

console.log(answer.join('\n'));
