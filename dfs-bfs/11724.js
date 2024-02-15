const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [vertex, edge] = input.shift().split(" ").map(Number);
const graph = Array.from({ length: vertex + 1 }, () => []);
const visited = Array.from({ length: vertex + 1 }, () => false);

// 반복문 돌면서 간선의 연결관계 만들기
input.forEach((item) => {
  const [from, to] = item.split(" ").map(Number);

  graph[from].push(to);
  graph[to].push(from);
});
let answer = 0;

const bfs = (start) => {
  let needVisited = [];
  needVisited.push(start);

  while (needVisited.length) {
    const curNode = needVisited.shift();

    // 아직 방문하지 않았다면
    if (!visited[curNode]) {
      visited[curNode] = true;

      needVisited = [...needVisited, ...graph[curNode]];
    }
  }
};

for (let i = 1; i <= vertex; i++) {
  // 아직 방문하지 않았다면 bfs호출
  if (!visited[i]) {
    bfs(i);
    answer++;
  }
}

console.log(answer);
// 두개의 문제점을 발견했다.

// 1번은 25번줄 queue도 확인해야함
//     graph[a].forEach((b) => {
//   if (isVisitedList[b] === false) {
//     isVisitedList[b] = true;

//     q.push(b);
//   }
// });

// 2번은
// bfs를 돌때 < 가 아닌 <= 로 수정해야함
