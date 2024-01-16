const fs = require("fs");
const fileSync = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(fileSync).toString().trim().split("\n").map(Number);
const N = input.shift();

const answer = [];
const change = ["0.25", "0.10", "0.05", "0.01"];

for (const item of input) {
  const arr = [];
  let target = item;

  for (let i = 0; i < change.length; i++) {
    const devide = Number(change[i]) * 100;

    arr.push(Math.floor(target / devide));
    target = target % devide;
  }

  answer.push(arr);
}

answer.forEach((item) => console.log(item.join(" ")));

// 문제 해결하는데 걸린 시간 10분
// 해당 문제는 이제 조금 빠르게 접근할 수 있게된 거 같다.
// devide에서 * 100 하는 부분은 처음부터 양수로 해도 괜찮았을 거 같다.
