// 백준_촌수계산

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
const [person1, person2] = input[1].split(" ").map(Number);
const m = Number(input[2]);

const graph = Array.from({ length: n + 1 }, () => []);
for (let i = 3; i < m + 3; i++) {
  const [from, to] = input[i].split(" ").map(Number);
  graph[from].push(to);
  graph[to].push(from);
}

const bfs = (start, target) => {
  const queue = [[start, 0]];
  const visited = Array(n + 1).fill(false);

  while (queue.length) {
    // 현재 노드와 촌수
    const [curNode, cnt] = queue.shift();
    if (curNode === target) return cnt;

    if (!visited[curNode]) {
      visited[curNode] = true;

      graph[curNode].forEach((item) => {
        queue.push([item, cnt + 1]);
      });
    }
  }

  return -1;
};

console.log(bfs(person1, person2));

// 문제해결 못함
// 아직 까지 모든 알고리즘에 완벽하게 익숙해지지 않은 것 같다. 많이 풀자.
// 복습하면서 알았지만 간단한데 구현하는 혹은 처리하는 로직만 조금 씩 다르기 때문에 집중해서 풀면 풄 수있다.
