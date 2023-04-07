const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let [input] = fs.readFileSync(filePath).toString().trim().split('\n');
let [min, max] = input
  .split(':')
  .map(Number)
  .sort((a, b) => a - b);

let gcd = 1;
for (let i = 2; i <= min; i++) {
  if (min % i === 0 && max % i === 0) gcd = i;
}

let [result1, result2] = input.split(':').map((item) => item / gcd);
console.log(`${result1}:${result2}`);

//두 수의 최대공약수를 구한다.
// 최대공약수로 두 수를 나눠주고,
// 다시 문자열로 출력해준다.
