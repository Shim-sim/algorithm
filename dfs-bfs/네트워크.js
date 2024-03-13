function solution(n, computers) {
  const visitedNode = [];
  let answer = 0;

  const bfs = (node) => {
    visitedNode[node] = true;
    const queue = [node];
    while (queue.length) {
      const curNode = queue.shift();
      computers[curNode].forEach((isConnected, idx) => {
        if (!isConnected || visitedNode[idx]) return;
        visitedNode[idx] = true;
        queue.push(idx);
      });
    }
  };

  for (let i = 0; i < n; i++) {
    if (!visitedNode[i]) {
      answer++;
      bfs(i);
    }
  }

  return answer;
}
