let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
const [n, target] = input.shift().split(' ').map(Number);
const arr = input.shift().split(' ').map(Number);

let start = 0;
let end = Math.max(...arr);
let result = 0;

while (start <= end) {
  let total = 0;
  let mid = Math.floor((start + end) / 2);

  for (const item of arr) {
    if (item > mid) {
      total += item - mid;
    }
  }

  if (total < target) {
    end = mid - 1;
  } else {
    result = mid;
    start = mid + 1;
  }
}

console.log(result);
