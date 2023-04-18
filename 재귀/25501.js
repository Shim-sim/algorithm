const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input.shift();
let answer = '';

function recursion(s, l, r, cnt) {
  if (l >= r) return [1, cnt];
  else if (s[l] !== s[r]) return [0, cnt];
  else return recursion(s, l + 1, r - 1, cnt + 1);
}

function isPalindrome(s) {
  return recursion(s, 0, s.length - 1, 1);
}

for (const a of input) {
  answer += isPalindrome(a).join(' ') + '\n';
}

const idx = answer.lastIndexOf('\n');
console.log(answer.substring(0, idx));
