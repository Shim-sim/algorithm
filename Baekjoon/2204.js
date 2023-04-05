const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const length = input.length;
let i = 0;
while (i < length) {
  let test = Number(input[i]);

  if (!test) break;
  let stack = [];
  i++;
  for (let j = 0; j < test; j++) stack.push(input[i++]);
  console.log(
    stack.sort((a, b) => {
      if (a.toLowerCase() > b.toLowerCase()) return 1;
      else if (a.toLowerCase() < b.toLowerCase()) return -1;
      else return 0;
    })[0],
  );
}

// 대소문자가 섞인 문자열이 들어오는데 대소문자를 구문하지 않고 가장 앞서는 단어출력.
// 즉 문자열을 소문자/대문자로 변환하여 정렬.
// 정렬 후 첫번째값 출력
