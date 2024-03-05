function solution(s) {
  const number = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  const answer = Object.entries(number).forEach(
    ([a, b]) => (s = s.split(a).join(b))
  );
  return Number(s);
}

// 문제푸는데 걸린 시간 25분
// split하고 join을 어떤 기준으로 해야할지 애먹은 문제였다.
// object가 아닌 array를 사용해서 문제를 해결해도 될 것 같다.
