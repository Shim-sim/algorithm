// 프로그래머스_귤고르기
// https://school.programmers.co.kr/learn/courses/30/lessons/138476

function solution(k, tangerine) {
  const map = new Map();

  tangerine.forEach((item) => {
    if (map.get(item)) {
      map.set(item, map.get(item) + 1);
    } else {
      map.set(item, 1);
    }
  });

  const arrayMap = Array.from(map);
  let result = 0;
  let total = 0;
  arrayMap.sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < arrayMap.length; i++) {
    const [key, val] = arrayMap[i];
    total += val;
    if (total >= k) {
      result++;
      break; // 반복문 종료
    } else {
      result++;
    }
  }

  return result;
}

// 문제푸는데 걸린 시간 30분
// 마지막에 비교하는걸 어떻게 해야할지 떠오르지 않아서 조금 애먹었다.
// 그리고 종료조건에 맞춰서 반복문을 종료할 때도 처음에 for문이 아닌 forEach때문에 종료조건에 걸리지 않아서 당황했다/
// Map객체의 사용 그리고 다시 array로 전환하는데 익숙해지자.
