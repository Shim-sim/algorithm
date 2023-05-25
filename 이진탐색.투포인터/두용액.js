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

  if (sum > 0) {
    // 두수의 합의 차이가 양수면 오른쪽 포인터를 저 작은 값을 가진
    // 왼쪽으로 움직임으로써 0에 더 가깝게 한다
    end--;
  } else {
    start++;
  }
}

console.log(answer.sort((a, b) => a - b).join(' '));
