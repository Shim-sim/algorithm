const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, target] = input.shift().split(" ").map(Number);
const countries = input.map((item) => {
  return item.split(" ").map(Number);
});

// 금메달이 같지 않으면 수행, 없으면 다음, 그래도 없으면 동메달 비교
countries.sort((a, b) => {
  if (a[1] !== b[1]) return b[1] - a[1]; // 금메달 수 비교 내림차순

  if (a[2] !== b[2]) return b[2] - a[2]; // 은메달 수 비교 내림차순
  return b[3] - a[3]; // 동메달 수 비교
});

const KMedals = countries.find((item) => item[0] === target);

let rank = 1;

for (let item of countries) {
  if (item[0] === target) break;
  else if (
    item[1] > KMedals[1] ||
    (item[1] === KMedals[1] && item[2] > KMedals[2]) ||
    (item[1] === KMedals[1] && item[2] === KMedals[2] && item[3] > KMedals[3])
  ) {
    rank++;
  }
}

console.log(rank);
