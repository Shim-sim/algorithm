function solution(n, computers) {
  const visitedNode = [];
  let answer = 0;

  const bfs = (node) => {
    visitedNode[node] = true;
    const queue = [node];
    while (queue.length) {
      const curNode = queue.shift();
      computers[curNode].forEach((isConnected, idx) => {
        // 0 이거나 이미 방문했으면 return
        if (!isConnected || visitedNode[idx]) return;
        visitedNode[idx] = true;
        queue.push(idx);
      });
    }
  };

  for (let i = 0; i < n; i++) {
    // 0번 컴퓨터 부터 검사
    if (!visitedNode[i]) {
      // 아직 방문하지 않았다면
      bfs(i); // bfs를 통해서 연결되어 있는 컴퓨터들을 방문한다.
      answer++;
    }
  }

  return answer;
}

// 연결되어 있는 컴퓨터들은 bfs를 통해 이미 방문처리가 되었기 때문에
// 방문처리가 되지 않았다면 다른 컴퓨터 네트워크다.
// 따라서 bfs를 실행시킨 횟수가 네트워크수가 된다.
