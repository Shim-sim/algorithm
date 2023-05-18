let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let [n, m] = input.shift().split(' ').map(Number);
const arr = input.shift().split(' ').map(Number);

// 이진 탐색을 위한 시작점과 끝점 설정
let start = 0;
let end = Math.max(...arr);
let result = 0;

// # 이진 탐색 수행 (반복적)
while (start <= end) {
  let total = 0;
  let mid = Math.floor((start + end) / 2);

  for (const item of arr) {
    // 잘랐을 떄의 떡의 양 계산
    if (item > mid) {
      total += item - mid;
    }
  }
  // 떡의 양이 부족한 경우 더 많이 자르기 (왼쪽부터탐색)
  if (total < m) {
    end = mid - 1;
    // 떡의 양이 충분한 경우 덜 자르기 (오른쪽부터 탐색)
  } else {
    result = mid; // 최대한 덜 잘랐을 때가 정답이므로, 여기에서 result에 기록
    start = mid + 1;
  }
}

// 정답출력
console.log(result);
