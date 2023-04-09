const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('');
let stack = [];
stack.push(input[0]);

for (let i = 1; i < input.length; i++) {
  if (input[i] === '(') {
    stack.push(input[i]);
  } else {
    if (stack.length > 0 && stack[stack.length - 1] === '(') {
      stack.pop();
    } else {
      stack.push(input[i]);
    }
  }
}
console.log(stack.length);

// 1. 여는 괄호가 나오면 스택에 추가

// 2. 닫는 괄호가 나왔을 경우

//   2-1) 스택이 비어있으면 올바르지 않은 괄호 쌍

//   2-2) 스택의 top이 짝이 맞지 않는 괄호일 경우 올바르지 않은 괄호쌍

//   2-3) 스택의 top이 짝이 맞는 괄호일 경우 pop
