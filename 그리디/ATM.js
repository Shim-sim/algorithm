const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let [n, p] = fs.readFileSync(filePath).toString().split('\n');

const person = p
  .split(' ')
  .sort((a, b) => a - b)
  .map(Number);

let answer = 0;
let total = 0;
for (let i = 0; i < person.length; i++) {
  total += answer + person[i];
  answer += person[i];
}

console.log(total);
