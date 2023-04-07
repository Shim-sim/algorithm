const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const solveCount = input.shift();
let count = 0;

for (let x of input) {
  if (x === isGroup(x).join('')) count++;
  function isGroup(str) {
    let newArr = [];
    for (let i = 0; i < str.length; i++) {
      if (!newArr.includes(str[i])) newArr.push(str[i]);
      if (str[i - 1] === str[i]) newArr.push(str[i]);
    }

    return newArr;
  }
}
console.log(count);
