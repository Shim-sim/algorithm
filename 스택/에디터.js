let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let leftStack = input.shift().split('');
let rightStack = [];

for (let i = 1; i <= input[0]; i++) {
  const [command, value] = input[i].split(' ');
  switch (command) {
    case 'L':
      if (leftStack.length != 0) {
        rightStack.push(leftStack.pop());
      }
      break;

    case 'D':
      if (rightStack.length != 0) {
        leftStack.push(rightStack.pop());
      }
      break;

    case 'B':
      if (leftStack.length != 0) {
        leftStack.pop();
      }
      break;

    case 'P':
      leftStack.push(value);
      break;
  }
}
console.log(leftStack.concat(rightStack.reverse()).join(''));

// 스택두개로 해결한 문제.
