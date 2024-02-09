class Node {
  constructor(item) {
    this.item = item;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(item) {
    const node = new Node(item);
    if (this.head == null) {
      this.head = node;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
    this.length += 1;
  }

  pop() {
    const popItem = this.head;
    this.head = this.head.next;
    this.length -= 1;
    return popItem.item;
  }
}
const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");
const [N, M] = input.shift().trim().split(" ").map(Number);
let board = input.map((v) => v.trim().split(""));

const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];
let answer = Infinity;
let visited = Array.from(Array(N), () => Array(M).fill(false));

function findJH() {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (board[i][j] == "J") {
        return [i, j];
      }
    }
  }
}

function findFire() {
  const fire = [];
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (board[i][j] == "F") {
        fire.push([i, j]);
      }
    }
  }
  return fire;
}

function isExit(i, j) {
  if (i == 0 || i == N - 1 || j == 0 || j == M - 1) {
    return true;
  }
  return false;
}

const [jx, jy] = findJH();
board[jx][jy] = ".";
let fire = findFire();
let f = new Queue();
let j = new Queue();

let jh = [[jx, jy, 1]];
visited[jx][jy] = true;

let flag = true;
while (jh.length > 0 && flag) {
  while (jh.length > 0) {
    const [jx, jy, cnt] = jh.shift();
    if (board[jx][jy] == "F") continue;
    if (isExit(jx, jy)) {
      answer = cnt;
      flag = false;
    } else {
      j.push([jx, jy, cnt]);
    }
  }
  if (!flag) break;

  while (fire.length > 0) {
    f.push(fire.shift());
  }
  while (f.length > 0) {
    const [fx, fy] = f.pop();
    for (let i = 0; i < 4; i++) {
      const nfx = fx + dx[i];
      const nfy = fy + dy[i];
      if (
        nfx >= 0 &&
        nfy >= 0 &&
        nfx < N &&
        nfy < M &&
        board[nfx][nfy] == "."
      ) {
        board[nfx][nfy] = "F";
        fire.push([nfx, nfy]);
      }
    }
  }

  while (j.length > 0) {
    const [jx, jy, cnt] = j.pop();
    for (let i = 0; i < 4; i++) {
      const njx = jx + dx[i];
      const njy = jy + dy[i];
      if (
        njx >= 0 &&
        njy >= 0 &&
        njx < N &&
        njy < M &&
        !visited[njx][njy] &&
        board[njx][njy] == "."
      ) {
        jh.push([njx, njy, cnt + 1]);
        visited[njx][njy] = true;
      }
    }
  }
}

if (answer == Infinity) console.log("IMPOSSIBLE");
else console.log(answer);

// 백준 불! 다시 풀어보기
