const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim();
let temp = Number(input);

let range = [300, 60, 10];
let answer = '';

for (let i = 0; i < range.length; i++) {
  answer += `${Math.floor(temp / range[i])} `;
  temp %= range[i];
}

answer = temp !== 0 ? -1 : answer.trim();
console.log(answer);
