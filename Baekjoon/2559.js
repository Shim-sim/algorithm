const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const data = input[1].split(' ').map(Number);
let sum = 0;

for (let i = 0; i < k; i++) {
  sum += data[i];
}

let max = sum;
for (let i = k; i < n; i++) {
  sum += data[i];
  sum -= data[i - k];
  max = Math.max(max, sum);
}

console.log(max);
