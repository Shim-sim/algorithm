let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let target = input.shift().split().map(Number)[0];
const arr = input.shift().split(' ').map(Number);

let start = 0;
let end = arr.length - 1;
let result = 0;
while (start <= end) {
  let mid = Math.floor((start + end) / 2);

  if (target < arr[mid]) {
    end = mid - 1;
  } else {
    start = mid + 1;
    result = mid;
  }
}

console.log(result);

// 특정 타겟의 index찾기 (이진탐색 기초)
// 20
// 1 10 20 47 59 63 75 88 99
