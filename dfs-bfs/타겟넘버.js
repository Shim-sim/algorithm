// 프로그래머스_타겟넘버
// https://school.programmers.co.kr/learn/courses/30/lessons/43165

function solution(numbers, target) {
  let answer = 0;

  const dfs = (idx, sum) => {
    idx++;
    if (idx === numbers.length) {
      if (sum === target) answer++;
      return;
    }

    dfs(idx + 1, sum + numbers[idx]);
    dfs(idx + 1, sum - numbers[idx]);
  };

  dfs(0, 0);

  return answer;
}

// 재귀함수를 완벽하게 그려보고 이해하자.
// 아직 까지 다시 돌아오는 Return 되는 부분을 완벽하게 이해하지 못하고 있는 것 같다.
