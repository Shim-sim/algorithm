const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stidin' : 'input.txt';
const [vertex, edge, ...arr] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const graph = Array.from(Array(+vertex + 1), () => []);
let visited = Array(+vertex + 1).fill(false);

arr.forEach((item) => {
  let [from, to] = item.split(' ').map(Number);
  graph[from].push(to);
  graph[to].push(from);
});
let answer = 0;

// bfs풀이
const bfs = (v) => {
  const visited = [];
  let needVisited = [];
  needVisited.push(v);

  while (needVisited.length !== 0) {
    const curNode = needVisited.shift();

    if (!visited.includes(curNode)) {
      visited.push(curNode);
      answer++;

      needVisited = [...needVisited, graph[curNode]];
    }
  }
};

// dfs 풀이
const dfs = (v) => {
  if (visited[v]) return;
  visited[v] = true;
  answer++;

  graph[v].forEach((item) => {
    if (!visited[item]) {
      dfs(item);
    }
  });
};

//1번 컴퓨터부터 깊이우선탐색
dfs(1);
//1번 컴퓨터 제외(1번 컴퓨터를 통해 바이러스에 걸리게 되는 컴퓨터의 수)
console.log(result - 1);
