const fs = require("fs");
const path = require("path");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const splitStr = process.platform !== "win32" ? "\n" : "\r\n";
const input = fs
  .readFileSync(path.resolve(__dirname, filepath))
  .toString()
  .trim()
  .split(splitStr);

const [R, C] = input[0].split(" ").map(Number);
const matrix = input.slice(1, R + 1).map((el) => el.split(""));

function solution(R, C, matrix) {
  const fQueue = [];
  const jQueue = [];

  for (let y = 0; y < R; y++) {
    for (let x = 0; x < C; x++) {
      if (matrix[y][x] === "J") {
        if (y === 0 || x === 0 || y === R - 1 || x === C - 1) return 1;
        jQueue.push([y, x, 0]);
      }
      if (matrix[y][x] === "F") {
        matrix[y][x] = 0;
        fQueue.push([y, x, 0]);
      }
    }
  }

  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  while (fQueue.length) {
    const [y, x, cnt] = fQueue.shift();

    for (let i = 0; i < dx.length; i++) {
      const [ny, nx] = [y + dy[i], x + dx[i]];

      if (ny >= 0 && nx >= 0 && ny < R && nx < C) {
        if (matrix[ny][nx] === "." || matrix[ny][nx] === "J") {
          matrix[ny][nx] = cnt + 1;
          fQueue.push([ny, nx, cnt + 1]);
        }
      }
    }
  }

  while (jQueue.length) {
    const [y, x, cnt] = jQueue.shift();

    if (cnt === 0) matrix[y][x] = 0;

    for (let i = 0; i < dx.length; i++) {
      const [ny, nx] = [y + dy[i], x + dx[i]];

      if (ny >= 0 && nx >= 0 && ny < R && nx < C) {
        if (matrix[ny][nx] === "." || matrix[ny][nx] > cnt + 1) {
          matrix[ny][nx] = cnt + 1;
          jQueue.push([ny, nx, cnt + 1]);
          if (ny === 0 || nx === 0 || ny === R - 1 || nx === C - 1) {
            return cnt + 2;
          }
        }
      }
    }
  }
  return "IMPOSSIBLE";
}

console.log(solution(R, C, matrix));
