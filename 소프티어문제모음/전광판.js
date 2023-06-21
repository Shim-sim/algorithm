const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input/txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const t = +input.shift();
const number = {
  0: '1110111',
  1: '0010010',
  2: '1011101',
  3: '1011011',
  4: '0111010',
  5: '1101011',
  6: '1101111',
  7: '1110010',
  8: '1111111',
  9: '1111011',
  ' ': '0000000',
};

for (let i = 0; i < t; i++) {
  let [a, b] = input[i].split(' ');
  a = ' '.repeat(5 - a.length) + a;
  b = ' '.repeat(5 - b.length) + b;

  let total = 0;
  for (let j = 0; j < 5; j++) {
    for (let k = 0; k < 7; k++) {
      total += number[a[j]][k] !== number[b[j]][k];
    }
  }

  console.log(total);
}
