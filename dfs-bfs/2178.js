// 백준_미로탐색
//https://www.acmicpc.net/problem/2178

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input.shift().split(" ").map(Number);
const graph = [];
input.forEach((item) => {
  graph.push(item.split("").map(Number));
});

// 상하좌우 설정
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const bfs = () => {
  const queue = [];

  // 시작점 현재좌표 설정
  let x = 0;
  let y = 0;

  queue.push([x, y]);

  while (queue.length !== 0) {
    const curNode = queue.shift();
    x = curNode[0];
    y = curNode[1];

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      // 상하좌우 이동가능한 경로인지 체크
      if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;

      // 경로를 벗어나지 않고 탐색이 가능하다면
      if (graph[nx][ny] === 1) {
        graph[nx][ny] = graph[x][y] + 1;
        queue.push([nx, ny]);
      }
    }
  }

  // index0 부터 시작하기 때문에 -1의 위치의 값을 출력
  return graph[n - 1][m - 1];
};

console.log(bfs());

// 문제 푸는데 걸린시간 15분
// 경로탐색 유형의 기초 문제를 외우다싶이 답을 보니까 반자동적으로 답이 적혔다.
// 이제는 조금 익숙해지고 있는데 확실히 많은 유형의 문제를 많이 반복하는게 좋을 것 같다,!
