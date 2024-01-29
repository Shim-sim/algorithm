function solution(input) {
  let inputList = input.split("\n");

  let size = inputList[0].split(" ").map((x) => parseInt(x));
  let n = size[0]; // 세로 y
  let m = size[1]; // 가로 x

  let iCount = 0; // 아이스크림 개수

  let graph = new Array();
  for (let i = 1; i <= n; i++) {
    graph.push(inputList[i].split("").map((x) => parseInt(x)));
  }

  for (let i = 0; i < m; i++) {
    // x
    for (let j = 0; j < n; j++) {
      // y
      // 1. 그래프가 0인지 확인
      if (graph[j][i] === 0) {
        // 상하좌우 돌면서 0이면 2로 변이
        dfs(graph, i, j, m, n);
        iCount++;
      }
    }
  }

  // 정답
  console.log(iCount);

  return iCount;
}

function dfs(graph, curNodX, curNodY, maxX, maxY) {
  let dir = [
    [0, -1],
    [1, 0],
    [0, 1],
    [-1, 0],
  ]; // 탐색 범위 이해

  // 1. 방문
  graph[curNodY][curNodX] = 2;

  // 2. 상우하좌 일일이 확인
  for (let i = 0; i < dir.length; i++) {
    // 3. 다음으로 갈 좌표 설정
    let nX = curNodX + dir[i][0];
    let nY = curNodY + dir[i][1];

    // 3. 다음 좌표가 갈 수 있는 곳인지 확인
    if (nX >= 0 && nY >= 0 && nX < maxX && nY < maxY) {
      if (graph[nY][nX] === 0) {
        dfs(graph, nX, nY, maxX, maxY);
      }
    }
  }
}

const test = `4 5
00110
00011
11111
00000`;

solution(test);
