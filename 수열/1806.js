const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, S] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

// 10,000 이하의 자연수로 이루어진 길이 N짜리 수열이 주어진다.
//  이 수열에서 연속된 수들의 부분합 중에 그 합이 S 이상이 되는 것 중,
//   가장 짧은 것의 길이를 구하는 프로그램을 작성하시오.
let sum = 0;
let minLength = Infinity;
let i = 0;
let j = 0;

while (j < N) {
  sum += arr[j];

  while (sum >= S) {
    sum -= arr[i];
    minLength = Math.min(minLength, j - i + 1);
    i++;
  }

  j++;
}

console.log(minLength === Infinity ? 0 : minLength);

// minLength의 값이 Infinity인 이유는 그냥 최대로 큰 값으로 계산 s의 최대값도 가능
// 부분합 계산시 음수의 값이 있고 최소값을 구할경우 -Infinity로 한다.
