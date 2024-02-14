// 백준_전투
// https://www.acmicpc.net/problem/1303

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

// n,m 구분 및 전쟁터 생성
const [m, n] = input.shift().split(" ").map(Number);
const visted = Array.from({ length: n }, () => new Array(m).fill(false));
let [white, blue] = [0, 0];

// 상하좌우 설정
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

// bfs
const bfs = (x, y) => {
  // 현재 들어온 위치가 W인지, B인지 구분
  const team = input[x][y];
  const queue = [];
  queue.push([x, y]);
  visted[x][y] = true;
  let num = 1;

  while (queue.length) {
    const [curX, curY] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nx = curX + dx[i];
      const ny = curY + dy[i];

      // 네방향 방문 가능한지
      if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;

      // 아직 방문하지 않았고, 팀과 같으면
      if (!visted[nx][ny] && input[nx][ny] === team) {
        num++;
        visted[nx][ny] = true;
        queue.push([nx, ny]);
      }
    }
  }
  // 해당 팀에 맞게 값을 더해준다. 기존값 + 새로운값의 제곱
  team === "W" ? (white += num ** 2) : (blue += num ** 2);
};

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (!visted[i][j]) bfs(i, j);
  }
}

console.log(white, blue);

// 문제푸는데 걸린시간 30분
// 반례를 못찾았음.
// 반레는 n,m의 위치가 다름... 문제를 확실히 보고 풀 것.
// 조건에 대해서 다르게 줄 수 있을 것 같다. 좀 더 직관적으로 수정해보자.
