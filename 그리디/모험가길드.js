const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let group = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

let result = 0; // 총 그룹의 수
let count = 0; // 현재 그룹에 포함된 모험가의 수

for (const item of group) {
  count += 1;
  if (count >= item) {
    result += 1;
    count = 0;
  }
}

console.log(result);

// 공포도를 낮은 것부터 하나 씩 확인하며 (오름정렬)
// 현재 그룹에 해당 모험가를 포함시키키
// 현재 그룹에 포함된 모험가의 수가 현재의 공포도 이상이라면, 그룹 결성
// 총 그룹의 수 증가시키키
// 현재 그룹에 포함된 모험가의 수 초기화
