const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, k] = input.shift().split(' ').map(Number);
const arr = Array.from({ length: 1000000 }, () => 0);
const findRange = 2 * k + 1;

let max = 0;
let sum = 0;

for (let i = 0; i < n; i++) {
  const [ice, x] = input[i].split(' ').map(Number);
  max = Math.max(x, max);
  arr[x] = ice;
}

for (let i = 0; i < Math.min(findRange, 1000000); i++) {
  sum += arr[i];
}

let answer = sum;
for (let i = findRange; i <= max; i++) {
  sum += arr[i];
  sum -= arr[i - findRange];
  answer = Math.max(answer, sum);
}

console.log(answer);

// 양동이 중 가장 좌표가 큰 값은 15이다.
// input을 받고 좌표가 가장 큰 곳 까지만 탐색을 한다.

//구현방법
// 1. 좌표에서 얼음양동이들의 최대범위 (1,000,000)까지 빈 배열을 생성
// 2. 슬라이딩 윈도우 이동범위는 2 * k + 1
// 3. input의 좌표중 가장 큰 값 그리고, 얼음의 양을 각 위치에 맞게 분리
// 4. 슬라이딩 윈도위의 범위만큼 먼저 sum에 더해준다.
// Math.min이라는 범위를 주는 이유는 1,000,000이라는 최대범위 예외처리
// 5. 슬라이딩 윈도우를 통해서 값을 더해주고 빼주고 최대값을 구한 다음 결과값 반환
