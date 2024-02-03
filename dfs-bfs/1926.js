// 백준_그림 1926
// https://www.acmicpc.net/problem/1926

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input.shift().split(" ").map(Number);
const visited = Array.from({ length: n }, () =>
  Array.from({ length: m }, () => false)
);

const graph = new Array();
input.forEach((item) => {
  graph.push(item.split(" ").map(Number));
});

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const bfs = (x, y) => {
  let cnt = 1; // 그림 넓이를 카운트할 변수. 초기값 1로 시작
  const queue = [];

  queue.push([x, y]);

  while (queue.length !== 0) {
    const [curX, curY] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nx = curX + dx[i];
      const ny = curY + dy[i];

      if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;

      if (graph[nx][ny] === 1 && !visited[nx][ny]) {
        visited[nx][ny] = true;
        cnt++;
        queue.push([nx, ny]);
      }
    }
  }

  return cnt;
};

let painting = 0; // 그림 개수 카운팅할 변수
let width = 0; // BFS 실행 후 결과값(현재 넓이) 담을 변수
let maxWidth = 0; // 최고 넓이값 담을 변수
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    // 방문하지 않았고, 종이에 색이 칠해진 부분(1)이면
    if (!visited[i][j] && graph[i][j]) {
      visited[i][j] = true; // 방문 처리
      painting++; // 그림 개수 카운트 증가
      width = bfs(i, j); // 현재 그림의 넓이는 bfs 실행할 때마다 반환받은 결과값
      if (width > maxWidth) maxWidth = width; // 그림 넓이를 비교하여 큰 값이 최대 넓이가 됨
    }
  }
}

console.log(painting);
console.log(maxWidth);

// 이번 문제 같은 경우에는 방문처리 할 곳 이 필수로 필요했고,  탐색 범위를 선정하는데 어려움이 있었다.
// 확실히 다양한 문제의 유형을 많이 풀어보는것이 정답이다.
