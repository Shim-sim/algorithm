function solution(board, moves) {
  const basket = [];
  let result = 0;
  moves.forEach((order) => {
    const doll = pickup(board, order - 1);
    if (doll) {
      if (basket.slice(-1) === doll) {
        basket.pop();
        result += 2;
      } else {
        basket.push(doll);
      }
    }
  });
  return result;
}

function pickup(board, order) {
  for (let i = 0; i < board.length; i++) {
    if (board[i][order] !== 0) {
      const doll = board[i][order];
      board[i][order] = 0;
      return doll;
    }
  }
}

// 1. 뽑은 인형을 담는 바구니 역할을 하는 배열 basket을 만든다.
// 2. basket에 연속해서 쌓여 사라진 인형의 수를 기록하는 result를 만든다.
// 3. moves 배열의 N번째 원소의 값을 가지고 board 배열을 순회하면서 0이 아닌 값을 basket에 담는다.
// 4. basket의 원소가 연속으로 같은 경우 두 원소를 제거하고 result += 2 해준다.
// 5. moves 배열을 모두 순회하면 사라진 인형의 개수 result를 리턴한다.
