// 백준_불!
// https://www.acmicpc.net/problem/4179

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [R, C] = input.shift().split(" ").map(Number);

// 불, 지훈이의 방문처리
// Infinity 설정이 필요한 이유
// 만약 미로에서 불이 없는 경우 0으로 설정했다면, 불의 시간을 계산하지 못하기때문에 탈출하지 못하게 된다.
const fireCheck = Array.from({ length: R }, () => new Array(C).fill(Infinity));
const personCheck = Array.from({ length: R }, () => new Array(C).fill(0));

// 상하좌우 설정
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

// 큐도 두개 만들기
const fireQueue = [];
const jihunQueue = [];
let answer = 0;

for (let i = 0; i < R; i++) {
  for (let j = 0; j < C; j++) {
    // 불이라면
    if (input[i][j] === "F") {
      fireCheck[i][j] = 1;
      fireQueue.push([i, j]);
      // 지훈이라면
    } else if (input[i][j] === "J") {
      personCheck[i][j] = 1;
      jihunQueue.push([i, j]);
    }
  }
}

// 불 최단거리 구하기
while (fireQueue.length) {
  const [curX, curY] = fireQueue.shift();

  for (let i = 0; i < 4; i++) {
    const nx = curX + dx[i];
    const ny = curY + dy[i];

    if (nx < 0 || ny < 0 || nx >= R || ny >= C) continue;

    // 이미 방문했거나, 벽이라면
    if (fireCheck[nx][ny] !== Infinity || input[nx][ny] === "#") continue;

    // 그렇지 않은 이동경로에는 이전 경로 보다 1더한 값을 추가
    fireCheck[nx][ny] = fireCheck[curX][curY] + 1;
    fireQueue.push([nx, ny]);
  }
}

// 지훈이의 최단거리 구하기
while (jihunQueue.length) {
  const [curX, curY] = jihunQueue.shift();

  // matrix의 가장 자리에 도착하면 반복문 중단 -> 미로탈출 완료
  if (curX === 0 || curY === 0 || curX === R - 1 || curY === C - 1) {
    answer = personCheck[curX][curY];
    break;
  }

  for (let i = 0; i < 4; i++) {
    const nx = curX + dx[i];
    const ny = curY + dy[i];

    if (nx < 0 || ny < 0 || nx >= R || ny >= C) continue;

    // 이미 방문했거나 벽이라면
    if (personCheck[nx][ny] || input[nx][ny] === "#") continue;

    // 불 이동경로가 크다 지훈이의 이동경로는 이동이 가능하다.
    if (fireCheck[nx][ny] > personCheck[curX][curY] + 1) {
      personCheck[nx][ny] = personCheck[curX][curY] + 1;

      jihunQueue.push([nx, ny]);
    }
  }
}

console.log(answer ? answer : "IMPOSSIBLE");

// 결국 중요한 건
// 불이 전파되는 시간을 모두 구한다.
// 지훈이가 불이 전파 된 시간보다 빠르게 탈출할 수 있냐.
// 지훈이가 불의 이동경로보다 빨라야 탈출이 가능하다.
// 반례는 불이 없는경우

// 지금까지는 bfs에서는 목적지가 정해져있거나 더이상 갈 곳이 없을때가지 계속 돌리는 상황이었던 반면 이번에는 외곽으로 탈출해야한다.
// 범위를 넘긴다는 것은 곧 탈출에 성공했다는 의미함. 큐에 반드시 거리순으로 들어가므로 최초에 탈출한 시간을 입력하고 리턴하면 됨.
