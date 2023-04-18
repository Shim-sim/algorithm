const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split();

const num = Number(input);

function fac(x) {
  if (x === 0) return 1;
  return x * fac(x - 1);
}

console.log(fac(num));

// 0보다 크거나 같은 정수 N이 주어진다. 이때, N!을 출력하는 프로그램을 작성하시오.
