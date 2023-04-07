function solution(n, m) {
  const [min, max] = [n, m].sort((a, b) => a - b);

  let arr = [];
  for (let i = 1; i <= min; i++) {
    if (min % i === 0 && max % i === 0) {
      arr.push(i);
    }
  }

  const GCD = Math.max(...arr);
  const LCM = (min * max) / GCD;

  return [GCD, LCM];
}

// 최대공약수는 두 정수를 나누었을 때, 나머지가 0인 약수 중에서 가장 큰 값을 의미.
// 최소공배수는 두 정수의 곱을 최대공약수로 나눈 값
