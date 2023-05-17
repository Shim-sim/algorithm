let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let [n, m] = input.shift().split(' ').map(Number);

// 미리 만들어둔 체스판
// 왼쪽 위가 W일 경우와 B일 경우로 나눠서 만들었다
let white = [
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
];
let black = [
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
];

function check(x, y) {
  let whiteCnt = 0;
  let blackCnt = 0;

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      [curX, curY] = [x + i, y + j];
      if (input[curX][curY] !== white[i][j]) whiteCnt++;
      if (input[curX][curY] !== black[i][j]) blackCnt++;
    }
  }

  return Math.min(whiteCnt, blackCnt);
}

let result = 64;

for (let i = 0; i < n - 7; i++) {
  for (let j = 0; j < m - 7; j++) {
    result = Math.min(result, check(i, j));
  }
}

console.log(result);

/**
 * 풀이 :
 * 1. 체스판 자르기 : 8 * 8 크기로 모든 경우의 수를 고려 해야함.
 * 2. 체스판의 왼쪽 모서리부터 8, 8 칸씩 떙겨 오면서 기존 보드와 비교하여 다른 값이 있을 때 count 의 값을 증가
 * 3. 전체 체스판들의 count을 비교하여 가장 작은 count를 return 해준다.
 */
