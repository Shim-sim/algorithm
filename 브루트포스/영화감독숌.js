const fs = require("fs");
const fileSync = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = +fs.readFileSync(fileSync).toString().trim();

let num = 666;
let cnt = 1;

while (cnt !== input) {
  num++;
  if (String(num).includes("666")) cnt++;
}
console.log(num);

// 문제푸는데 걸린 시간 10분
// 풀이 방법은 바로 찾았는데 num을 array로 바꿔줘야하나? 생각했다.
// 근데 그냥 string으로 바꿔주고 같은 값이 있으면 cnt를 늘려줘서 루프를 탈출하면 됐다
// 연속된 숫자를 비교할 때는 array.includes 보다 string.includes가 나을수도.
