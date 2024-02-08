// 백준_단지번호붙이기
// https://www.acmicpc.net/problem/2667

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = Number(input.shift());
const map = input.map((v) => v.split("").map(Number));

// 상, 우, 하, 좌
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];
// 단지의 크기
const apartmentCount = [];

const bfs = (x, y) => {
  const queue = [];
  let num = 0;

  queue.push([x, y]);

  while (queue.length) {
    const [curx, cury] = queue.shift();
    num++;

    for (let i = 0; i < 4; i++) {
      const nx = curx + dx[i];
      const ny = cury + dy[i];

      // 구간탐색
      if (nx < 0 || ny < 0 || nx >= n || ny >= n) continue;

      // 방문이 가능하면 방문처리 후 queue에 push
      if (map[nx][ny]) {
        map[nx][ny] = 0;
        queue.push([nx, ny]);
      }
    }
  }
  return num;
};

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    // 방문가능하면 bfs 시작
    if (map[i][j]) {
      // 시작점 방문처리
      map[i][j] = 0;
      // bfs 결과를 push
      apartmentCount.push(bfs(i, j));
    }
  }
}

apartmentCount.sort((a, b) => a - b);
const answer = [apartmentCount.length, ...apartmentCount];
console.log(answer.join("\n"));

// 틀린 부분. 아무리 생각해도 로직에 이상은 없었는데... shift() 할 때 N이 배열이여서 그랬던 것이였다..
// const input = fs
//   .readFileSync(filePath)
//   .toString()
//   .trim()
//   .split("\n")
//   .map((v) => v.split("").map(Number));
// const n = input.shift();
