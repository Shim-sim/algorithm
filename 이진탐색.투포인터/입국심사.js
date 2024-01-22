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
