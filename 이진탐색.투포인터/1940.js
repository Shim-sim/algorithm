const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [n, m, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");

let left = 0;
let right = Number(n) - 1;
let result = 0;
const item = arr[0]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

while (left < right) {
  const total = item[left] + item[right];

  // 합이 같으면 결과를 1 올려준다 left를 이동한다.
  if (total === Number(m)) {
    result++;
    left++;

    // 합이 작으면 합을 늘리기 위해서 left를 이동
  } else if (total < Number(m)) {
    left++;

    // 합이 크면 줄이기 위해서 Right로 이동
  } else if (total > Number(m)) {
    right--;
  }
}
// 합을 기준으로 이동할 수 있는 이유는 정렬이 되어있기 때문

console.log(result);
