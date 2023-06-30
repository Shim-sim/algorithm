let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const [n, m] = input.shift().split(" ").map(Number);
const arr = input.shift().split(" ").map(Number);

function cal(arr, mid) {
  let cnt = 1;
  let minV, maxV;

  minV = arr[0];
  maxV = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minV) minV = arr[i];
    if (arr[i] > maxV) maxV = arr[i];

    if (maxV - minV > mid) {
      cnt++;
      minV = arr[i];
      maxV = arr[i];
    }
  }

  return cnt <= m;
}

function solution(n, m, arr) {
  let right = Math.max(...arr);
  let left = 0;
  let res = right;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (cal(arr, mid)) {
      if (res > mid) res = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return res;
}

const result = solution(n, m, arr);
console.log(result);
