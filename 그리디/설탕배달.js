const fs = require("fs");
const fileSync = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = Number(fs.readFileSync(fileSync).toString().trim());

let result = 0;

while (input > 0) {
  if (input % 5 === 0) {
    input -= 5;
  } else {
    input -= 3;
  }

  result += 1;
}

input === 0 ? console.log(result) : console.log(-1);
// 문제 해결하는데 걸린시간 25분
// 문제 난이도 체감 하중?
// 조금 헷갈렸다. 문제 이해는 누구나하는데 구현을 잘 못해서 오래 걸렸다.. 아직 구현능력이 부족하다...
