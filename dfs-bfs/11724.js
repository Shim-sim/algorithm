const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [vertex, edge] = input[0].split(" ").map(Number);

const graph = Array.from({ length: vertex + 1 }, () => []);
const visited = Array.from({ length: vertex + 1 }, () => false);

// 반복문 돌면서 간선의 연결관계 만들기
for (let i = 1; i < vertex; i++) {
  const [from, to] = input[i].split(" ").map(Number);
  graph[from].push(to);
  graph[to].push(from);
}

let answer = 0;

const bfs = (start) => {
  let needVisited = [];
  needVisited.push(start);

  while (needVisited.length) {
    const curNode = needVisited.pop();

    // 아직 방문하지 않았다면
    graph[curNode].forEach((item) => {
      if (!visited[item]) {
        visited[item] = true;
        needVisited.push(item);
      }
    });
  }
};

for (let i = 1; i < vertex; i++) {
  // 아직 방문하지 않았다면 bfs호출
  if (!visited[i]) {
    visited[i] = true;
    bfs(i, 0);
    answer++;
  }
}

fs.writeFileSync("/dev/stdout", answer.toString());
// // 첫째 줄에 정점의 개수 N과 간선의 개수 M이 주어진다.

const fs = require("fs");

const inputs = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = inputs.shift().split(" ").map(Number);

const graph = Array(n + 1)
  .fill(0)
  .map(() => []);

inputs.forEach((row) => {
  const [a, b] = row.split(" ");

  graph[+a].push(+b);
  graph[+b].push(+a);
});

const isVisitedList = Array(n + 1).fill(false);
let answer = 0;

const bfs = (v) => {
  const q = [v];

  while (q.length > 0) {
    const a = q.pop();

    graph[a].forEach((b) => {
      if (isVisitedList[b] === false) {
        isVisitedList[b] = true;

        q.push(b);
      }
    });
  }
};

for (let i = 1; i <= n; i++) {
  if (isVisitedList[i] === false) {
    isVisitedList[i] = true;
    bfs(i);

    answer++;
  }
}

fs.writeFileSync("/dev/stdout", answer.toString());
