// 프로그래머스_게임맵최단거리
// https://school.programmers.co.kr/learn/courses/30/lessons/1844

function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;
  // 동, 서, 남, 북
  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];

  const bfs = (x, y) => {
    const queue = [];
    queue.push([x, y]);

    while (queue.length) {
      const [curx, cury] = queue.shift();

      for (let i = 0; i < 4; i++) {
        const nx = curx + dx[i];
        const ny = cury + dy[i];

        // 방문이 가능한지 확인
        if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;

        if (maps[nx][ny] === 1) {
          // 기존 위치의 값에서 1 더하기
          maps[nx][ny] = maps[curx][cury] + 1;
          queue.push([nx, ny]);
        }
      }
    }

    // index는 0부터 시작하니까 1씩 빼주기
    return maps[n - 1][m - 1] > 1 ? maps[n - 1][m - 1] : -1;
  };

  return bfs(0, 0);
}

// 문제푸는데 걸린 시간 15분
// 최단경로 탐색할 때는 bfs로 접근하는게 가장 좋은 것 같다.
// n,m이 따로 주어지지 않아서 maps에서 n과 m의 값을 추출했는데 다른 방법도 있을 것 같다.
// 그 외에는 어려움없이 방문가능한지 여부만 잘 체크하면 되는 기본적인 문제였다.
