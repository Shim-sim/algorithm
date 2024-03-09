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

  // bfs 로직 start(시작), expect(제외 노드)
  const bfs = (start, expect) => {
    const queue = [start];
    // 방문 처리
    const visited = new Array(start + 1).fill(false);
    let count = 0; // 도달 가능한 노드의 수

    visited[start] = true;

    while (queue.length) {
      const curNode = queue.shift();

      graph[curNode].forEach((item) => {
        // 제외한 노드가 아니고, 아직 방문하지 않았다면
        if (item !== expect && !visited[item]) {
          visited[item] = true;
          queue.push(item);
        }
      });
      count++;
    }

    return count;
  };

  // 주어진 전선을 하나 씩 끊으면서 그 차이가 가장 낮은게 정답
  wires.forEach((item) => {
    const [from, to] = item;

    answer = Math.min(answer, Math.abs(bfs(from, to) - bfs(to, from)));
  });

  return answer;
}

// 문제 해결 x 답보고 풀었다. (복습 필수)
// 우선 차이값이 음수가 나올 수 있기 때문에 Math.abs()를 사용해야한다.
// 그 외에는 그렇게 어렵지 않았지만.. 제외 노드 처리를 어떻게 구현해야할지 몰라서 답을 봤다.
// 다시 복습이 필요한 문제
