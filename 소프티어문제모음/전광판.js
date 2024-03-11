// 소프티어 전광판
// https://softeer.ai/app/assessment/index.html?xid=94399&xsrfToken=i4phS6XJpbsCLCb1BgsCfEPN6SwDUEvk&testType=practice

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const testCase = Number(input.shift());

// 전구를 숫자로 변환
const numberLight = {
  0: [1, 1, 1, 0, 1, 1, 1],
  1: [0, 0, 1, 0, 0, 1, 0],
  2: [1, 0, 1, 1, 1, 0, 1],
  3: [1, 0, 1, 1, 0, 1, 1],
  4: [0, 1, 1, 1, 0, 1, 0],
  5: [1, 1, 0, 1, 0, 1, 1],
  6: [1, 1, 0, 1, 1, 1, 1],
  7: [1, 1, 1, 0, 0, 1, 0],
  8: [1, 1, 1, 1, 1, 1, 1],
  9: [1, 1, 1, 1, 0, 1, 1],
  " ": [0, 0, 0, 0, 0, 0, 0],
};

for (let i = 0; i < testCase; i++) {
  let total = 0;
  let [a, b] = input[i].split(" ");

  // a와 b를 동일하게 비교연산 수행할 수 있도록 변환
  a = " ".repeat(5 - a.length) + a;
  b = " ".repeat(5 - b.length) + b;

  for (let j = 0; j < 5; j++) {
    for (let k = 0; k < 7; k++) {
      // a,b의 각 자리수의 light가 다르다면 total에 1씩 추가
      total += numberLight[a[j]][k] !== numberLight[b[j]][k];
    }
  }

  console.log(total);
}
