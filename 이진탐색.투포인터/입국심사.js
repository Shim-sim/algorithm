function solution(n, times) {
  const sorted = times.sort((a, b) => a - b);
  let start = 1;
  let end = sorted[sorted.length - 1] * n;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    //  (시간 / 심사시간 으로 입국자수를 구할수있다.)
    const sum = times.reduce((acc, cur) => acc + Math.floor(mid / cur), 0);

    if (sum < n) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return start;
}

// 25분동안 해결하지 못해서 풀이 접금방식 검색해보고 다시 문제를 해결
// 무조건 복습이 필요한 문제다.
// 충분히 고민하면 풀 수 있는문제인데 너무 어렵게만 생각한 것 같다.
// 해당 문제에서는 정답의 범위의 최대 값이 '가장 오래 걸리는 심사관 * 승객 수'이다.
// 이분탐색을 진행하며 해당 시간에 모든 심사관들이 최대로 할 수 있는 심사 횟수를 계산하고,
// 심사 횟수가 승객 수에 근접하고 가장 시간이 적게 걸리는 경우를 return 한다

// N의 개수가 10억이상 즉 너무 많으면 이분탐색을 먼저 떠올리자.
// 그리고 start와 end를 기준으로 먼저 세운다.
// end는 항상 해당 문제의 worst케이스를 end의 기준으로 세우자.
