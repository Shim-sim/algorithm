function fac(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    //메모리를 위해서 재귀가 아닌 반복문 사용
    result *= i;
  }

  return result;
}

function solution(n) {
  let result = 0;

  for (let i = 1; i <= 10; i++) {
    if (fac(i) <= n) {
      result = i;
      continue;
    } else {
      break;
    }
  }

  return result;
}
