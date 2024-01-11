const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

if (input.join("") === [1, 2, 3, 4, 5, 6, 7, 8].join("")) {
  console.log("ascending");
} else if (input.join("") === [8, 7, 6, 5, 4, 3, 2, 1].join("")) {
  console.log("descending");
} else if (input.length !== 8) {
  console.log("mixed");
} else {
  console.log("mixed");
}

// 문제를 처음 접하고 너무 쉬워서 놀랬다. 같은 lv2여도 굉장히 쉬운문제였다.
// 근데 계속 tc하나에서 계속 틀리는데 descending에서 스펠링 틀린 실수였다.
// 사소한것들 조차도 놓지지 않도록 신경써보자.
