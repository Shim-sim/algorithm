const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

let sum = 0,
  count = 0;

for (let i = 1; ; i++) {
  sum += i;
  count++;

  if (sum > input[0]) {
    count--;
    break;
  }
}

console.log(count);
