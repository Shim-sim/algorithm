// 백준 2343_기타레슨
// https://www.acmicpc.net/problem/2343

const fs = require("fs");
const fileSync = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(fileSync).toString().trim().split("\n");
const [n, m] = input.shift().split(" ").map(Number);
const arr = input[0].split(" ").map(Number);

let start = Math.max(...arr);
let end = arr.reduce((acc, cur) => acc + cur, 0);
let answer = 0;

while (start <= end) {
  const mid = Math.floor((start + end) / 2);
  let cnt = 0;
  let remain = 0;

  for (let i = 0; i < n; i++) {
    if (remain < arr[i]) {
      cnt++;
      remain = mid - arr[i];
    } else {
      remain -= arr[i];
    }
  }

  if (cnt > m) {
    start = mid + 1;
  } else {
    answer = mid;
    end = mid - 1;
  }
}

console.log(answer);

// right(high)는 제일 극단적인 값이 되어야한다. 모든 레슨길이를 더한 값.
// 이유는 블루레이가 만약 1이 주어졌을 때 하나의 블루레이에 모든 것들을 담아야 하기 때문이다.
// 그렇다면 left왼쪽 끝 값은??
// 만약 0 혹은 1로 설정한다면 레슨 1만 담을 수 있고,나머지는 담을 수가 없다.
// 따라서 레슨의 값들 중 가장 큰 값이 시작점이 되어야한다.
// 그렇다면 해당 예제로 블루레이가 9라면 모든 아이템들을 담을 수 있기 때문이다.
// 만약 1이라면 1외에 다른 값을 담을 수 없기때문에 결과적으로 mid값을 설정할 때 반례가 발생할 것이다.
