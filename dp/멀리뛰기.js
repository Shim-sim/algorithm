// 프로그래머스_멀리뛰기
// https://school.programmers.co.kr/learn/courses/30/lessons/12914#qna

function solution(n) {
  const dp = new Array(n + 1);
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1234567;
  }

  return dp[n];
}

// 문제를 푸는데 걸린 시간 답보고 해결
// 규칙을 발견하지 못했다.. 결국 답보고 아 피보나치였구나... 생각했다.
