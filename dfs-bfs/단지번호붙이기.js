const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const N = Number(input.shift());
const arr = input.map((item) => item.split('').map(Number));

const visited = [];
for (let i = 0; i < N; i++) {
  visited.push(new Array(N).fill(0));
}

const complex = [];
let number = 0;

// x : 행 / y: 열
const moveRow = [0, 0, 1, -1]; // 동, 서, 남, 북
const moveCol = [1, -1, 0, 0]; // 동, 서, 남, 북

// 범위체크 - 유효한 단지인지
const rangeCheck = (row, col) => {
  if (row >= 0 && row < N && col >= 0 && col < N) {
    return true;
  }
  return false;
};

const DFS = (row, col) => {
  if (
    rangeCheck(row, col) === true &&
    arr[row][col] === 1 &&
    visited[row][col] === 0
  ) {
    // 범위안에 들어가고 && 방문한적이 없으면 DFS 탐색
    visited[row][col] = 1; // 방문 처리
    number++;
    for (let n = 0; n < moveRow.length; n++) {
      DFS(row + moveRow[n], col + moveCol[n]);
    }
  }
};

for (let row = 0; row < N; row++) {
  for (let col = 0; col < N; col++) {
    if (Number(arr[row][col]) === 1 && visited[row][col] === 0) {
      DFS(row, col);
      complex.push(number);
      number = 0;
    }
  }
}
complex.sort((a, b) => a - b); // 오름차순으로 정렬!
const answer = [complex.length, ...complex];

console.log(answer.join('\n'));

// 이 문제는 DFS와 BFS 방법 모두 풀 수 있다.
// 상하좌우로만 이동할 수 있다고 했으므로 상하좌우로 붙어있어야 연결되었다고 볼 수 있다.

// 1. 주어진 자료를 모두 배열에 담는다.
// 2. 이중 for문을 통해 행과 열을 돌면서 집이 있고, 방문한적이 없다면 dfs를 실행.
// 3. 이때 탐색이 한번 끝나면 단지가 만들어졌다고 볼 수 있다.
//   왜냐하면 기본적인 dfs와 bfs도 연결되어있는 그래프를 가지고 순서대로 탐색하기 때문
// 4. 그리고 상하좌우를 탐색하기 위한 moveRow와 moveCol배열을 만들어서 움직임을 나타내준다.
// 5. 또한 주의할점은 범위체크는 필수 이다. 주어진 지도를 넘어가지 않을 수 있고, 또한 범위에 맞더라도 방문여부를 체크하는 visited배열도 필요하다.
