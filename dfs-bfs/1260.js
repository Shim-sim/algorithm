const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let [vertex, edge, start] = input.shift().split(" ").map(Number);
let graph = Array.from({ length: vertex + 1 }, () =>
  new Array(vertex + 1).fill(0)
);

// 인접행렬 matrix 풀이방법 풀이
for (let i = 0; i < edge; i++) {
  const [from, to] = input[i].split(" ").map(Number);

  graph[from][to] = 1;
  graph[to][1] = 1;
}

const DFS_visited = new Array(vertex + 1).fill(false);
const DFS_answer = [];

const dfsMatrix = (start) => {
  DFS_visited[start] = true;
  DFS_answer.push(start);

  for (let i = 1; i < graph.length; i++) {
    // graph에 1이있고 방문하지 않았다면 재귀를 호출
    if (graph[start][i] === 1 && DFS_visited[i] === false) {
      dfsMatrix(i);
    }
  }
};
dfsMatrix(start);
console.log(DFS_answer);

// 인접행렬 구하기
// 인접행렬은 노드간 연결이 되어있으면 1, 연결되어있지 않으면 0으로 표기하는 2차원 배열이다.
// index가 0부터 시작하기 때문에 헷갈리지 않도록 4X4 행렬이 아닌 5X5 행렬로 만들었다.

// DFS 풀이법
// 정답과 방문처리를 할 자료구조가 필요하다.
// 탐색 시작점을 방문 처리한다.
// 반복문을 돌면서 엣지가 있고 방문하지 않았다면 재귀를 호출해준다.
// 결과적으로 모든 그래프를 순회하고 탐색을 종료 후 결과를 출력해준다.
// ========== 구분선 ============
// 인접리스트 풀이
// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
// const input = fs.readFileSync(filePath).toString().trim().split("\n");

// let [vertex, edge, start] = input.shift().split(" ").map(Number);
// let graph = Array.from({ length: vertex + 1 }, () => Array());

// // 인접리스트 풀이방법 list 풀이
// for (let i = 0; i < edge; i++) {
//   const [from, to] = input[i].split(" ").map(Number);

//   graph[from].push(to);
//   graph[to].push(from);
// }

// const dfsList = (graph, startNode) => {
//   const visited = [];
//   let needVisted = [];

//   needVisted.push(startNode);

//   while (needVisted.length !== 0) {
//     const curNode = needVisted.pop();
//     if (!visited.includes(curNode)) {
//       visited.push(curNode);
//       let nodes = graph[curNode];
//       needVisted = [...needVisted, ...nodes.sort((a, b) => b - a)];
//     }
//   }

//   return visited;
// };

// 1. 시작 노드를 방문한다.
//     1. 시작 노드의 방문을 표시한다
// 2. 시작 노드와 인접한 노드들을 차례로 순회한다.
//     1. 인접한 노드를 이전에 방문했다면 방문하지 않는다.
//     2. 이전에 방문하지 않은 노드라면 해당 노드를 시작 노드로 한다.
// 3. 시작 노드의 인접한 노드를 모두 탐색했다면 탐색을 종료한다.

// -------- 기본 풀이 ///
// const fs = require("fs");
// const fileSync = process.platform === "linux" ? "/dev/stdin" : "input.txt";
// const input = fs.readFileSync(fileSync).toString().trim().split("\n");

// const [vertex, edge, start] = input.shift().split(" ").map(Number);
// const graph = Array.from({ length: vertex + 1 }, () => []);

// input.forEach((item) => {
//   const [from, to] = item.split(" ").map(Number);
//   graph[from].push(to);
//   graph[to].push(from);
// });

// const dfs = (graph, start) => {
//   const visited = [];
//   let needVisited = [];
//   needVisited.push(start);

//   while (needVisited.length !== 0) {
//     const curNode = needVisited.pop();

//     if (!visited.includes(curNode)) {
//       visited.push(curNode);

//       const togoVisited = graph[curNode];
//       needVisited = [...needVisited, ...togoVisited.sort((a, b) => b - a)];
//     }
//   }

//   return visited;
// };

// const bfs = (graph, start) => {
//   const visited = [];
//   let needVisited = [];

//   needVisited.push(start);

//   while (needVisited.length !== 0) {
//     const curNode = needVisited.shift();

//     if (!visited.includes(curNode)) {
//       visited.push(curNode);
//       const togoVisited = graph[curNode];

//       needVisited = [...needVisited, ...togoVisited.sort((a, b) => a - b)];
//     }
//   }
//   return visited;
// };

// console.log(dfs(graph, start).join(" "));
// console.log(bfs(graph, start).join(" "));
