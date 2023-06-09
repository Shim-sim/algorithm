function solution(n, m, maze) {
  const graph = [];
  maze.split('\n').map((m) => {
    m = m.split('').map(Number);
    graph.push(m);
  });

  // 상하좌우
  dx = [-1, 1, 0, 0];
  dy = [0, 0, -1, 1];

  const queue = [];
  let x = 0,
    y = 0;
  queue.push([x, y]);

  while (queue.length !== 0) {
    const temp = queue.shift();
    x = temp[0];
    y = temp[1];

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      // 범위를 벗어나지 않는지 체크
      if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;

      // 이동이 가능한 경로에 (현재 위치 + 1를 해준다.)
      // 그 다음 queue에는 해당 노드를 다시 push 해준다.
      if (graph[nx][ny] === 1) {
        graph[nx][ny] = graph[x][y] + 1;
        queue.push([nx, ny]);
      }
    }
  }
  // 2차원 배열의 크기를 생각하면 n-1, m-1이 맞다.
  console.log(graph[n - 1][m - 1]);
}

solution(5, 6, '101010\n111111\n000001\n111111\n111111');
