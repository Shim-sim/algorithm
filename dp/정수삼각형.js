// 프로그래머스_정수삼각형
// https://school.programmers.co.kr/learn/courses/30/lessons/43105

const solution = (triangle) => {
  const length = triangle.length;
  for (let i = 1; i < length; i++) {
    for (let j = 0; j < triangle[i].length; j++) {
      //1번 로직 (왼쪽)
      // 해당위치에 이전 값 더해주기
      if (j === 0) {
        triangle[i][j] += triangle[i - 1][j];

        //3번 로직 (반대편 끝)
        // 해당위치에 이전 값 더해주기
      } else if (j === triangle[i].length - 1) {
        triangle[i][j] += triangle[i - 1][j - 1];
        //2번 삼각형
        // 양쪽 끝 변이 아닌경우 위의 두 값중 더 큰값을 더해준다.
      } else {
        triangle[i][j] += Math.max(triangle[i - 1][j - 1], triangle[i - 1][j]);
      }
    }
  }

  return Math.max(...triangle[length - 1]);
};

console.log(solution([[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]));

// 문제풀이 X
// 정답 보고 재풀이
// 이제는 조금은 이해가 되지만 다양한 문제들을 최대한 많이 풀어봐야할거 같다.

// 삼각형을 위에서부터 1층이라고 가정했을 때
// 각층의 최대값은 항상 위층의 최대값이 더한 최대값이 된다.
// 삼각형을 기준으로 1번은 왼쪽 대각선, 3번은 오른쪽 대각선으로 간다고 가정한다면 항상 그 값이 일치한다.
// 다만 2번 같은 경우에는 위에서 만날 수 있는 두개의 합중 더 큰 값을 더해주면 된다.
