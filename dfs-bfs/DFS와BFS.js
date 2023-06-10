const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let [n, edge, start] = input.shift().split(' ').map(Number);
let graph = [...Array(n + 1)].map((e) => []);

for (let i = 0; i < edge; i++) {
  let [from, to] = input[i].split(' ').map(Number);
  graph[from].push(to);
  graph[to].push(from);
}

const dfs = (graph, startNode) => {
  const visited = [];
  let needVisted = [];

  needVisted.push(startNode);

  while (needVisted.length !== 0) {
    const curNode = needVisted.pop();
    if (!visited.includes(curNode)) {
      visited.push(curNode);
      let nodes = graph[curNode];
      needVisted = [...needVisted, ...nodes.sort((a, b) => b - a)];
    }
  }

  return visited;
};

const bfs = (graph, startNode) => {
  const visited = [];
  let needVisted = [];

  needVisted.push(startNode);

  while (needVisted.length !== 0) {
    const curNode = needVisted.shift();
    if (!visited.includes(curNode)) {
      visited.push(curNode);
      const nodes = graph[curNode];
      needVisted = [...needVisted, ...nodes.sort((a, b) => a - b)];
    }
  }

  return visited;
};

console.log(dfs(graph, start).join(' '));
console.log(bfs(graph, start).join(' '));
