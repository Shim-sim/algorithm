const solution = (triangle) => {
  let answer = 0;
  const col = triangle.length;
  for (let i = 1; i < col; i++) {
    for (let j = 0; j < triangle[i].length; j++) {
      if (j === 0) {
        //1번 삼각형
        triangle[i][j] += triangle[i - 1][j];
      } else if (j === triangle[i].length - 1) {
        //3번 삼각형
        triangle[i][j] += triangle[i - 1][j - 1];
      } else {
        //2번 삼각형
        triangle[i][j] += Math.max(triangle[i - 1][j - 1], triangle[i - 1][j]);
      }
    }
  }
  for (let i = 0; i < triangle[col - 1].length; i++) {
    if (answer < triangle[col - 1][i]) {
      answer = triangle[col - 1][i];
    }
  }

  return answer;
};

console.log(solution([[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]));

// for문을 돌면서 triangle 배열을 그때 그때 최대값으로 변경을 해주었다.

// 각각의 숫자는 왼쪽 아래 대각선 또는 오른쪽 아래 대각선 이 두가지 선택지 뿐이다.

// 그래서 i = 1부터 시작하면서   두 번째줄 3하고 8이 있는데 3은 왼쪽 대각선이 없으니 오른쪽 대각선 7밖에 선택하지 못한다.
