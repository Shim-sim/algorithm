const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input.shift().split(" ").map(Number);

const dfs = (x, y) => {
  // 주어진 범위를 벗어나는 경우에는 즉시 종료
  if (x <= -1 || x >= n || y <= -1 || y >= m) {
    return false;
  }

  // 현재 노드를 아직 방문하지 않았다면
  if (graph[x][y] === 0) {
    // 해당 노드를 방문처리
    graph[x][y] = 1;

    // 상,하,좌,우 위치들도 모두 재귀적으로 호출
    dfs(x - 1, y);
    dfs(x, y - 1);
    dfs(x + 1, y);
    dfs(x, y + 1);
    return true;
  } else {
    return false;
  }
};

const graph = new Array();
let result = 0;
input.forEach((item) => {
  graph.push(item.split("").map(Number));
});

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (dfs(i, j)) result++;
  }
}

console.log(result);

// 주어진 범위를 벗어나는 경우 즉시 종료 되는 이유
// 상하좌우 모두 확인해야하기 때문에 matrix의 상하좌우 끝은 -1이 올 수 있다.
// 그래서 주어진 범위에서 -1 || n이나 m이 넘었을 때 false로 return 해주어야한다.
