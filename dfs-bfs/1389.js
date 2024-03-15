// 백준_케빈 베이컨의 6단계 법칙

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input.shift().split(" ").map(Number);
const graph = Array.from({ length: n + 1 }, () => []);

input.forEach((item) => {
  const [from, to] = item.split(" ").map(Number);
  graph[from].push(to);
  graph[to].push(from);
});

const bfs = (start, target) => {
  const queue = [[start, 0]];
  const visited = [];
  let ans = 0;

  while (queue.length) {
    const [curNode, cnt] = queue.shift();

    if (!visited[curNode]) {
      visited[curNode] = true;
      ans += cnt;
      graph[curNode].forEach((item) => {
        queue.push([item, cnt + 1]);
      });
    }
  }

  return ans;
};

const result = [];

for (let i = 1; i <= n; i++) {
  result[i] = bfs(i);
}

result.shift();
console.log(result.indexOf(Math.min(...result)) + 1);
// indexof로 구하기
// 촌수계산 문제와 거의 동일한 문제
