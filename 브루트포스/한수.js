let input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');
let num = Number(input[0]);

function solution(num) {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    if (i < 100) {
      count++;
    } else if ((i) => 100 && i < 1000) {
      let stNum = String(i);
      let dif1 = Number(stNum[1]) - Number(stNum[0]);
      let dif2 = Number(stNum[2]) - Number(stNum[1]);

      if (dif1 === dif2) {
        count++;
      }
    }
  }
  s;
  return count;
}

console.log(solution(num));
