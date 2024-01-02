const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

for (const item of input) {
  let stack = [];

  if (item === ".") break;
  let isValid = true;

  for (let i = 0; i < item.length; i++) {
    if (item[i] === "(" || item[i] === "[") {
      stack.push(item[i]);
    } else if (item[i] === ")") {
      if (stack.at(-1) !== "(") {
        isValid = false;
        break;
      } else {
        stack.pop();
      }
    } else if (item[i] === "]") {
      if (stack.at(-1) !== "[") {
        isValid = false;
        break;
      } else {
        stack.pop();
      }
    }
  }

  if (stack.length > 0 || !isValid) {
    console.log("no");
  } else {
    console.log("yes");
  }
}

// 열리는 괄호가 있을 때 stack에 push
// 닫히는 현재 아이템이 닫히는 괄호일 때
// 1. stack의 탑(마지막)의 값이 열린 괄호와 같지 않으면 isValid = false 그리고 반복문 종료
// 2. 그렇지 않은 경우 stack 비워주기
