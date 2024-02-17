// 백준_피보나치2
// https://www.acmicpc.net/problem/2748

const fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = Number(fs.readFileSync(filepath).toString().trim());

const solution = (start) => {
  const fibo = [0, 1];

  for (let i = 2; i <= start; i++) {
    fibo[i] = BigInt(fibo[i - 1]) + BigInt(fibo[i - 2]);
  }

  return fibo[start].toString();
};

console.log(solution(input));

// 문제푸는데 걸린시간 15분
// 로직은 너무 쉬웠지만 BigInt를 전혀 고려하지 않음.

// BigInt 사용해야 하는 이유
// JavaScript의 Number 타입은 2^53 - 1 보다 큰 값을 정확하게 표현할 수 없다.
// ex)
// let bigNumber = Number.MAX_SAFE_INTEGER; //9007199254740991
// console.log(bigNumber + 2); // 9007199254740992 = X ,  9007199254740993 = O

// 이러한 경우를 대비해서 BigInt를 사용해야 한다.
// 이때 N은 90까지 들어올 수 있고, 피보나치의 90번재 수는 Number의 최대값을 초과하기 때문
