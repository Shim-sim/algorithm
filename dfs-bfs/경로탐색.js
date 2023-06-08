// v = 현재정점, i = 배열의 index, check = 해당 정점을 지났는지 체크하는 배열
// graph[v][i] - 현재 정점에서 이동할 수 있는 정점으로 node 변수에 저장

// 재귀를 돌면서 ch[node]가 0이라면 v 정점에서 node 정점으로 이동할 수 있다는 것이므로 해당 정점으로 이동했음을 나타내기 위해 ch[node]를 1로 재할당한다.
// DFS(node) 함수를 호출하고 종료가 되면 다음에 해당 정점으로 이동할 수 있도록 ch[node]를 0으로 다시 재할당한다. (백트래킹)
// v와 n이 같다면 하나의 경우가 만들어진 것이므로 answer에 1을 더해준다.

function solution(n, arr) {
  let answer = 0;
  const graph = Array.from(Array(n + 1), () => Array());
  const check = Array.from(Array(n + 1), () => 0);

  // 인접리스트
  for (let [a, b] of arr) {
    graph[a].push(b);
  }

  const dfs = (v) => {
    if (v === n) {
      answer++;
    } else {
      // 그래프 행의 길이만큼 for loop
      for (let i = 0; i < graph[v].length; i++) {
        const node = graph[v][i];

        if (check[node] === 0) {
          check[node] = 1;
          dfs(node);
          check[node] = 0;
        }
      }
    }
  };

  check[1] = 1;
  dfs(1);

  return answer;
}

let arr = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5],
];
console.log(solution(5, arr));
