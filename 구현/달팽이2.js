let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let [m, n] = fs.readFileSync(filePath).toString().split(' ');
let arr = Array.from({ length: m }, () => Array.from({ length: n }, () => 0));
let nrow = [0, 1, 0, -1];
let ncol = [1, 0, -1, 0];

let count = 0;
let idx = 0;
let x = 0;
let y = 0;
arr[x][y] = m * n;

while (idx < 4) {
  let nx = x + nrow[idx];
  let ny = y + ncol[idx];

  if (nx >= m || nx <= -1 || ny >= n || ny <= -1 || arr[nx][ny] !== 0) {
    idx++;
    count++;
  } else {
    arr[nx][ny] = arr[x][y] - 1;
    if (arr[nx][ny] === 1) break;
    x = nx;
    y = ny;
  }

  if (idx >= 4) idx = 0;
}

console.log(count);
