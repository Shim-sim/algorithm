const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input.shift().split(" ").map(Number);

const graph = new Array();
let result = 0;
input.forEach((item) => {
  graph.push(item.split("").map(Number));
});

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const bfs = () => {
  const queue = [];
  let x = 0;
  let y = 0;

  queue.push([x, y]);

  while (queue.length !== 0) {
    console.log(queue);
    const temp = queue.shift();
    x = temp[0];
    y = temp[1];

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      // 범위를 벗어나지 않는지 체크
      if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;

      // 이동이 가능한 경로에 (현재 위치 + 1을 해준다.)
      // 그 다음 queue에는 해당 노드를 다시 push 해준다.
      if (graph[nx][ny] === 1) {
        graph[nx][ny] = graph[x][y] + 1;
        queue.push([nx, ny]);
      }
    }
  }
  //index 0 부터 시작하기 때문에 -1의 위치의 값을 출력한다.
  return graph[n - 1][m - 1];
};

console.log(bfs());
