// 제곱함수

function power(a, b) {
  if (b === 0) return 1;
  return a * power(a, b - 1);
}

// 팩토리얼
function factorial(num) {
  if (num === 0) return 1;
  return num * factorial(num - 1);
}
