// 백준_미로탐색
//https://www.acmicpc.net/problem/2178

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input.shift().split(" ").map(Number);
const arr = input.map((item) => item.split("").map(Number));

// 상하좌우
const dx = [1, -1, 0, 0];
const dy = [0, 0, -1, 1];

const bfs = (x, y) => {
  const queue = [[x, y]];

  while (queue.length) {
    const [curX, curY] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nx = curX + dx[i];
      const ny = curY + dy[i];

      // 범위를 벗어나면 continue
      if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;

      if (arr[nx][ny] === 1) {
        arr[nx][ny] = arr[curX][curY] + 1;
        queue.push([nx, ny]);
      }
    }
  }

  return arr[n - 1][m - 1];
};

console.log(bfs(0, 0));

// 문제 푸는데 걸린시간 12분
// 지난 문제를 다시 푸는데 코드가 조금은 달라졌다. 결국엔 반복 숙달이다.
