const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("");

const x = input[0].charCodeAt(0) - 97 + 1;
const y = +input[1];

// 이동가능 경로 (수평2, 수직1), (수직2, 수평1)
const moving = [
  [2, -1],
  [2, 1],
  [-2, 1],
  [-2, -1],
  [-1, 2],
  [1, 2],
  [-1, -2],
  [1, -2],
];

// 이동가능한 경로 (정답)
let cnt = 0;

for (let i = 0; i < moving.length; i++) {
  // 현재 좌표에서 이동 가능한 경로
  const nx = x + moving[i][0];
  const ny = y + moving[i][1];

  // 좌표를 벗어나면 다음으로 이동
  if (nx < 1 || ny < 1 || nx > 8 || ny > 8) continue;

  cnt++;
}

console.log(cnt);
