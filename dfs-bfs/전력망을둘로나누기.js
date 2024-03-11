// 프로그래머스_전령망 둘로나누기
// https://school.programmers.co.kr/learn/courses/30/lessons/86971

function solution(n, wires) {
  let answer = 100;

  // from, to 형태로 그래프 생성
  const graph = Array.from({ length: n + 1 }, () => []);
  wires.forEach((item) => {
    const [from, to] = item;
    graph[from].push(to);
    graph[to].push(from);
  });

  // bfs 시작과, 제외할 노드 받기
  const bfs = (start, except) => {
    const queue = [start];
    const visited = Array.from({ length: start + 1 }, () => false);
    let count = 0; // 도달 가능한 노드의 수

    visited[start] = true;

    while (queue.length) {
      const curNode = queue.shift();
      // 아직 방문하지 않았고, 제외 할 노드가 아니라면

      graph[curNode].forEach((item) => {
        // 제외할 노드가 아니고, 아직 방문하지 않았다면
        if (item !== except && !visited[item]) {
          visited[item] = true;
          queue.push(item);
        }
      });
      count++;
    }

    return count;
  };

  // 반복문 돌면서 bfs실행시키고, 그 차이가 가장 적은 값을 정답으로
  wires.forEach((item) => {
    const [from, to] = item;

    answer = Math.min(answer, Math.abs(bfs(from, to) - bfs(to, from)));
  });

  return answer;
}

// 문제 해결 x 답보고 풀었다. (복습 필수)
// 우선 차이값이 음수가 나올 수 있기 때문에 Math.abs()를 사용해야한다.
// 그 외에는 그렇게 어렵지 않았지만..
// 결국에는 연결 된 단선을 하나 씩 잘라가면서 모든 경우의 수를 구해야 정답을 도출해낼 수 있다.
// 그러기 위해서는 bfs문제에 대해서 조금 더 익숙해질 필요가 있을 것 같다
