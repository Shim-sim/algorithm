const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : ".input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ").map(Number); //숫자 배열로 만들기

//검정색 체스 개수 배열 생성
const blackNum = [1, 1, 2, 2, 2, 8];

// blackNum 각 요소에서 inputData값의 요소들을 빼줌.
const result = blackNum.map((el, idx) => el - input[idx]);
// console.log(result); [ -1, 0, 0, 1, 0, 7 ]

// 출력값이 띄어쓰기로 구분 되어 있으므로 join을 이용하여 출력함
console.log(result.join(" "));
