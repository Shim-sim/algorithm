let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let iter = input.shift();
let stack = [];
let answer = [];

for (let i = 0; i < iter; i++) {
  let [text, value] = input[i].split(' ');

  switch (text) {
    case 'push':
      stack.push(value);
      break;

    case 'pop':
      stack.length ? answer.push(stack.pop()) : answer.push('-1');
      break;

    case 'size':
      answer.push(stack.length);
      break;

    case 'empty':
      !stack.length ? answer.push('1') : answer.push('0');
      break;

    case 'top':
      !stack.length ? answer.push('-1') : answer.push(stack[stack.length - 1]);
      break;
  }
}

console.log(answer.join('\n'));

// 매 회차마다 콘솔을 찍어줬을 때는 시간초과가 나서 실패했다. 방법은 배열에 담아주고 한번만 출력했을 때
// 시간초과에서 벗어날 수 있었다.
