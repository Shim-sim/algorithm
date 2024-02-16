// 백준_연결 요소의 개수
// https://www.acmicpc.net/problem/11724

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

    // 아직 방문하지 않았다면 방문처리를 한다.
    // 성능향상과 재방문을 막을 처리가 필요

    graph[curNode].forEach((item) => {
      // 해당 그래프있는 노드들이 아직 방문처리를 하지 않았을 경우에만 방문처리
      if (!visited[item]) {
        visited[item] = true;
        needVisited.push(item);
      }
    });
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

// 기존 풀이와 달라진 점은 노드의 방문처리를 할 때 이미 방문처리가 완료 된 노드들을 한번 더 필터링 해주는 과정이 필요하다.
