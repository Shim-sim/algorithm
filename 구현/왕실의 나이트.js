let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let position = fs.readFileSync(filePath).toString().split('');

const x = position[0].charCodeAt(0) - 97 + 1;
const y = position[1];

let count = 0;
let moveType = [
  [2, 1],
  [2, -1],
  [-1, -2],
  [-1, 2],
  [1, -2],
  [1, 2],
  [-2, 1],
  [-2, -1],
];

for (let i = 0; i < 8; i++) {
  let nx = x + moveType[i][0];
  let ny = y + moveType[i][1];

  if (nx < 1 || nx > 8 || ny < 1 || ny > 8) continue;
  count++;
}

console.log(count);

// 이동가는 경로
// 1. 수평으로 두 칸 이동한 뒤에 수직으로 한 칸 이동
// 2. 수직으로 두 칸 이동한 뒤에 수평으로 한칸 이동
// 중요한 포인트는 문자열로 들어오는 위치 정보를 인덱스로 변환하는 것.
// chatcodeAt 연습하기.
