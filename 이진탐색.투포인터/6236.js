// 백준 6236_용돈관리
// https://www.acmicpc.net/problem/6236

const fs = require("fs");
const fileSync = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(fileSync).toString().trim().split("\n");

const [n, k] = input.shift().split(" ").map(Number);
const moneys = input.map((el) => +el);
let left = Math.max(...input);
let right = input.map(Number).reduce((acc, cur) => {
  return acc + cur;
}, 0);
let answer = 0;

while (left <= right) {
  let mid = Math.floor((left + right) / 2);
  let cnt = 0;
  let remain = 0;

  // 매 시행마다 N개의 데이터를 대상으로 반복문을 돌리면서 현재의 K값(mid)을 기준으로 데이터를 나누었을 때
  //  몇 개의 그룹으로 나뉘는지를 count 한다.
  for (let i = 0; i < n; i++) {
    if (remain < moneys[i]) {
      // 남은돈이 쓸돈보다 작다면
      cnt++; // 인출횟수 증가
      remain = mid - moneys[i]; // 인출한 돈에서 쓸돈을 빼줌
    } else {
      remain -= moneys[i];
    }
  }

  // 그룹이 많아졌을 경우 금액을 늘리면 그룹이 줄어든다.
  if (cnt > k) {
    left = mid + 1;
    // 그룹이 적을 경우에는 금액을 줄여 그룹을 늘리면 된다.
    // 최소화 하는 값을 구해야하기 때문에 이때 answer의 값을 바꿔준다.
  } else {
    answer = mid;
    right = mid - 1;
  }
}

console.log(answer);

// 문제를 푸는데 걸린시간 1시간 이상
// 문제를 이해하지 못해서 문제해설을 보고 다시 문제를 품.
// 가장 중요한 것은 범위설정과 문제이해
// 최소값은 데이터 중 가장 큰 값, 최대값은 데이터의 총합으로 설정한다.
// 최소값이 데이터 중 가장 큰 값이 되어야 하는 이유는 M = 1일 경우에 모든 돈을 커버해야하기 때문.
// 최대값은 데이터의 범위들 중 가장 큰 값

// 결국 중요한건 범위설정
// 이분탐색을 통해 찾을 건 k의 최소값
