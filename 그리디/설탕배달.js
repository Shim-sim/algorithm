const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = +fs.readFileSync(filePath).toString();

let result = 0;

while (true) {
  if (input % 5 === 0) {
    console.log(input / 5 + result);
    break;
  }

  if (0 > input) {
    console.log(-1);
    break;
  }

  result++;
  input -= 3;
}
