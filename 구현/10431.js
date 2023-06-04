const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [num, ...testCase] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

for (let i = 0; i < Number(num); i++) {
  const [T, ...arr] = testCase[i].split(' ').map((i) => Number(i));
  let count = 0;

  arr.forEach((item, index) => {
    for (let j = 0; j < index; j++) {
      if (arr[j] > item) {
        count += 1;
      }
    }
  });

  console.log(T, count);
}
