let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let [n, target] = input.shift().split(' ').map(Number);
const arr = input.map(Number);

// 이진 탐색을 위한 시작점과 끝점 설정
let start = 0;
let end = Math.max(...arr);
let result = 0;

// 이진 탐색 수행 (반복적)
while (start <= end) {
  let total = 0;
  let mid = Math.floor((start + end) / 2);
  for (const item of arr) {
    // 랜선을 잘랐을 때 개수
    total += Math.floor(item / mid);
  }

  // 자른 랜선의 개수가 부족한 경우 더 많이 자르기
  if (total < target) {
    end = mid - 1;
  } else {
    // 자른 랜선의 개수가 충분한 경우 덜 자르기
    result = mid; //
    start = mid + 1;
  }
}

console.log(result);
