let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let [n, plan] = fs.readFileSync(filePath).toString().split('\n');

const moveType = {
  L: [0, -1],
  R: [0, 1],
  U: [-1, 0],
  D: [1, 0],
};

let point = [1, 1];
for (const item of plan) {
  const [x, y] = moveType[item];

  const nx = point[0] + x;
  const ny = point[1] + y;

  if (nx < 1 || nx > n || ny < 1 || ny > n) continue;
  point[0] = nx;
  point[1] = ny;
}

console.log(point);
