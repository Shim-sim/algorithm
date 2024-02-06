// 백준_토마토 7576
// https://www.acmicpc.net/problem/7576
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

const [m, n] = input.shift();

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
const queue = [];

let unripeTomato = 0; // 안 익은 토마토 카운트할 변수

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    // 안 익은 토마토(0)이면 카운트 증가
    if (!input[i][j]) unripeTomato++;
    // 익은 토마토(1)이면 큐에 해당 위치와 걸린 일수 초기값 0 담기
    else if (input[i][j] === 1) queue.push([i, j, 0]);
  }
}

// BFS
let answer = 0;
let idx = 0;
while (queue.length > idx) {
  const [cx, cy, days] = queue[idx++];

  // 현재 위치 기준 인접한 네방향 탐색할 반복문
  for (let i = 0; i < 4; i++) {
    const nx = cx + dx[i];
    const ny = cy + dy[i];

    // 해당 위치 그래프(박스) 범위 밖으로 벗어나지 않았고 안 익은 토마토(0)인 경우
    if (nx >= 0 && nx < n && ny >= 0 && ny < m && !input[nx][ny]) {
      input[nx][ny] = 1; // 토마토 익힘
      unripeTomato--; // 안 익은 토마토 수 감소
      queue.push([nx, ny, days + 1]); // 큐에 해당 위치와 걸린 일수 증가시켜 담기
    }
  }
  answer = days; // 걸린 기간(일수) answer 변수에 저장
}

// 안 익은 토마토가 있다면 -1 반환, 아니면 answer(걸린 일수) 반환
console.log(unripeTomato ? -1 : answer);
