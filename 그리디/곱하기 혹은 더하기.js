const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('').map(Number);

let result = input.shift();

for (let i = 0; i < input.length; i++) {
  let num = input[i];
  if (num <= 1 || result <= 1) {
    result += num;
  } else {
    result *= num;
  }
}

console.log(result);

// 대부분의 경우 '+' 보다는 'x'가 더 값을 크게 만든다.
// 예를 들어 5 + 6 = 11이고, 5 * 6 = 30이다.
// 다 만 두 수 중에서 하나라도 0 혹은 1인 경우 곱하기보다는 더하기를 수행하는 것이 효율적이다.
// 따라서 두 수에 대하여 연산을 수행할 때, 두 수 중에서 하나라도 1 이하인 경우에는 더하며, 두 수가 모두 2 이상이면
// 곱하면 정답이다.

// 문제를 빠르게 추리하고 구현하기 위해서 고민하자
