// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
// const input = fs
//   .readFileSync(filePath)
//   .toString()
//   .trim()
//   .split("\n")
//   .map((v) => v.split("").map(Number));

// const n = input.shift();

// // 상, 우, 하, 좌
// const dx = [-1, 0, 1, 0];
// const dy = [0, 1, 0, -1];
// const houses = [];
// let count = 0;
// const bfs = (x, y) => {
//   const queue = [];
//   input[x][y] = 0;
//   queue.push([x, y]);

//   while (queue.length) {
//     const [curx, cury] = queue.shift();
//     num++;

//     for (let i = 0; i < 4; i++) {
//       const nx = curx + dx[i];
//       const ny = cury + dy[i];

//       // 구간탐샋
//       if (nx < 0 || ny < 0 || nx >= n || ny >= n) continue;

//       // 방문이 가능하면
//       if (input[nx][ny] === 1) {
//         input[nx][ny] = 0;
//         queue.push([nx, ny]);
//       }
//     }
//   }
// };

// // 단지의 크기
// const apartmentCount = [];
// for (let i = 0; i < n; i++) {
//   for (let j = 0; j < n; j++) {
//     // 방문가능하면 bfs 시작
//     if (input[i][j] === 1) {
//       num = 0;
//       bfs(i, j);
//       apartmentCount.push(num);
//     }
//   }
// }

// apartmentCount.sort((a, b) => a - b);
// const answer = [apartmentCount.length, ...apartmentCount];
// console.log(answer.join("\n"));

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const N = Number(input.shift());
const map = input.map((v) => v.split("").map(Number));
const ds = [
  [-1, 0],
  [1, 0],
  [0, 1],
  [0, -1],
]; // 인접한 좌우상하 xy좌표
let answer = [];

const bfs = (start) => {
  const queue = [start];
  let cnt = 0; // 단지내 집의 개수 카운트할 변수

  while (queue.length) {
    const [curY, curX] = queue.shift();
    cnt++; // 개수 증가

    // 현재 위치 기준 인접한 곳들 탐색할 반복문
    for (let i = 0; i < 4; i++) {
      const ny = curY + ds[i][1];
      const nx = curX + ds[i][0];

      // 다음 위치가 지도 밖으로 벗어나지 않고 집이 있는 곳(1)이라면
      if (ny >= 0 && ny < N && nx >= 0 && nx < N && map[ny][nx]) {
        map[ny][nx] = 0; // 방문 처리
        queue.push([ny, nx]); // 해당 위치 큐에 담기
      }
    }
  }
  return cnt; // 집의 개수 반환
};

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (map[i][j]) {
      // 집이 있는 곳(1)이면
      map[i][j] = 0; // 방문 처리
      answer.push(bfs([i, j])); // 배열에 bfs실행 후 결과값 담기
    }
  }
}
console.log(answer.length); // 총 단지 개수 출력
console.log(answer.sort((a, b) => a - b).join("\n")); // 오름차순, 한 줄에 하나씩 출력
