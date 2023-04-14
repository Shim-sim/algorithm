const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('');
let stack = [];
let answer = 0;

for (let i = 0; i < input.length; i++) {
  const string = input[i];

  if (string === '(' && input[i + 1] === ')') {
    answer += stack.length;
    i += 1;
  } else if (string === '(') {
    stack.push(string);
  } else if (string === ')') {
    stack.pop();
    answer += 1;
  }
}

console.log(answer);

// 세 가지의 경우가 있다.
// 1. '('를 만나고 그 다음이 ")" 일때,
// 2. '('를 만났을 때,
// 3. ')'를 만났을 때,

// 1번의 경우는 레이저를 쏘는 경우. 레이저를 쏘는 경우 스택에 있는 길이만큼 답에 더해주면된다.
// (레이저를 쏘면 막대기의 개수가 스틱 하나당 하나 씩 늘어난다. ex) 스틱 === 3 이면 레이져를 쐈을 때, 3개가 늘어난다.)

// 2번의 경우는 스틱이 시작하는 부분, 막대기가 생기는 부분이니까 스택에 하나를 추가해준ㄷ.
// 3번의 경우는 스틱이 끝나는 부분. 스택 배열에서 pop을 해주고, 하나의 스택이 완성됐으니 정답에 1을 더해준다.
// (pop하고 스택에 1을 더해주는 이유는 앞쪽에서 레아저로 인해서 조각난 막대기의 마지막 조각이라고 생각하면 될듯.)
