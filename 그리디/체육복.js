function solution(n, lost, reserve) {
  let realLost = lost.filter((item) => !reserve.includes(item));
  let realReserve = reserve.filter((item) => !lost.includes(item));
  let answer = n - realLost.length;

  realLost.sort((a, b) => a - b);

  realLost.forEach((l) => {
    if (realReserve.length === 0) {
      return;
    }

    if (realReserve.includes(l - 1)) {
      realReserve = realReserve.filter((r) => r !== l - 1);
      answer++;
    } else if (realReserve.includes(l + 1)) {
      realReserve = realReserve.filter((r) => r !== l + 1);
      answer++;
    }
  });

  return answer;
}

// 두 가지의 테스트케이스를 고려하지 못했다.
// 1. 여벌 체육복을 가져온 학생이 체육복을 도난당했을 수 있습니다.
//  이때 이 학생은 체육복을 하나만 도난당했다고 가정하며, 남은 체육복이 하나이기에 다른 학생에게는 체육복을 빌려줄 수 없습니다.
// 즉 lost와 , reserve 모두 포함되어있는 값을 필터링해주어야한다.
// 2. 정렬되어있지 않을 때
// 쉬운데 어려웠다. 그리디의 구현은 생각보다 머리아프다. 반복숙달이 정답인듯
