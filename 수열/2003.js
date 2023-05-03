const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);
let count = 0;

for (let i = 0; i < arr.length; i++) {
  let sum = 0;

  for (let j = i; j < arr.length; j++) {
    sum += arr[j];

    if (sum === m) {
      count++;
      break;
    }
  }
}

console.log(count);

// 수들의 합
