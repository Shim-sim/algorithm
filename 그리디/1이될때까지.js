const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let [n, k] = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

let result = 0;

while (true) {
  let target = (n / k) * k;
  result += n - target;
  n = target;

  if (n < k) {
    break;
  }

  result += 1;
  n /= k;
}

result += n - 1;
console.log(result);

// input
//25 5
