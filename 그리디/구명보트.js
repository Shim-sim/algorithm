// 프로그래머스_구명보트
// https://school.programmers.co.kr/learn/courses/30/lessons/42885#qna

function solution(people, limit) {
  people.sort((a, b) => a - b);

  let start = 0;
  let end = people.length - 1;
  let answer = 0;

  while (start <= end) {
    const total = people[start] + people[end];

    if (total > limit) {
      end--;
    } else if (total <= limit) {
      start++;
      end--;
    }
    answer++;
  }

  return answer;
}

// 정렬해서 그 다음 인덱스와의 합이 limit을 넘지 않으면 리턴.
// 문제를 푸는데 걸린시간 22분
// 생각보다 간단했는데 어렵게 생각해서 효율성에서 계속 틀렸다.
// 결국 투포인터로 문제해결 완료
