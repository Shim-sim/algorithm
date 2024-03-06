// 프로그래머스_구명보트
// https://school.programmers.co.kr/learn/courses/30/lessons/42885#qna

function solution(people, limit) {
  people.sort((a, b) => a - b);
  let count = 0;
  let left = 0;
  let right = people.length - 1;

  while (left <= right) {
    const total = people[left] + people[right];

    if (total > limit) {
      right -= 1;
    } else if (total <= limit) {
      left++;
      right--;
    }
    count++;
  }

  return count;
}

// 정렬해서 그 다음 인덱스와의 합이 limit을 넘지 않으면 리턴.
// 문제를 푸는데 걸린시간 22분
// 생각보다 간단했는데 어렵게 생각해서 효율성에서 계속 틀렸다.
// 결국 투포인터로 문제해결 완료
