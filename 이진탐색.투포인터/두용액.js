const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let [n, m] = fs.readFileSync(filePath).toString().trim().split('\n');

let arr = m
  .split(' ')
  .sort((a, b) => a - b)
  .map(Number);

let start = 0;
let end = arr.length - 1;
let result = Infinity;
let answer = '';

while (start < end) {
  let sum = arr[start] + arr[end];

  if (result > Math.abs(sum)) {
    result = Math.abs(sum);
    answer = [arr[start], arr[end]];
  }

  if (sum < 0) {
    start++;
  } else {
    end--;
  }
}

console.log(answer.sort((a, b) => a - b).join(' '));
