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

// array 풀이
function solution2(s) {
  const number = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  number.forEach((item, idx) => (s = s.replaceAll(item, idx)));
  return Number(s);
}
// replace가 아닌 replaceAll을 사용해야 하는 이유
// replace() 메서드는 해당 문자열을 한 번만 찾아 변경하고 replaceAll()은 해당하는 문자열을 모두 찾아 치환한다.

// 문제푸는데 걸린 시간 25분
// split하고 join을 어떤 기준으로 해야할지 애먹은 문제였다.
// object가 아닌 array를 사용해서 문제를 해결해도 될 것 같다.
// 문자열 변환 문제의 경우 replace를 적극 활용하자.
