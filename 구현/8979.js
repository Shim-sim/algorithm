const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, K] = input.shift().split(" ").map(Number);
const countries = input.map((line) => line.split(" ").map(Number));

// 메달 순으로 국가를 정렬합니다.
countries.sort((a, b) => {
  if (a[1] !== b[1]) return b[1] - a[1]; // 금메달 수 비교
  if (a[2] !== b[2]) return b[2] - a[2]; // 은메달 수 비교
  return b[3] - a[3]; // 동메달 수 비교
});

// K 국가의 메달 정보를 찾습니다.
const KMedals = countries.find((country) => country[0] === Number(K));

// K 국가의 등수를 계산합니다.
let rank = 1;
for (let country of countries) {
  if (
    country[1] > KMedals[1] ||
    (country[1] === KMedals[1] && country[2] > KMedals[2]) ||
    (country[1] === KMedals[1] &&
      country[2] === KMedals[2] &&
      country[3] > KMedals[3])
  ) {
    rank++;

    // 1등이면 바로 break
  } else if (country[0] === K) {
    break;
  }
}

console.log(rank);
