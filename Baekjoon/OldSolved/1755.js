const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let [start, end] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map(Number);
let dic = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  0: 'zero',
};
// 숫자를 받아서 영어로 변환
const Change = (S) => {
  S = String(S);
  const tmp = [];
  for (let i = 0; i < S.length; i++) {
    tmp.push(dic[Number(S[i])]);
  }
  return tmp;
};

const check = [...new Array(end - start + 1)].map(() => []);
let j = 0;
for (let i = start; i <= end; i++) {
  check[j].push(i);
  let result = Change(i);
  check[j] = [...check[j], ...result];
  j += 1;
}

check.sort((a, b) => {
  if (a[1] > b[1]) return 1;
  if (a[1] < b[1]) return -1;
  if (a[2] > b[2]) return 1;
  if (a[2] < b[2]) return -1;
});

let answer = '';
for (let i = 0; i < check.length; i++) {
  answer += check[i][0];
  if ((i + 1) % 10 !== 0 || i !== check.length - 1) {
    answer += ' ';
  }
  if ((i + 1) % 10 === 0 || i === check.length - 1) {
    console.log(answer);
    answer = '';
  }
}
