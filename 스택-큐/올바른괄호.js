function solution(s) {
  const stack = [];

  if (s[0] === ")") return false;
  for (const item of s) {
    if (item === "(") {
      stack.push(item);
    } else {
      if (stack.at(-1) === "(") {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
}

// 처음 계속 효율성 체크에서 실패를 했다. 이유는 들어오는 input(s)의 첫값 닫는 괄호일 떄 에러처리를 해주지 않아서 발생한 이유였다.
// 그 다음 한 가지 효율성 체크에서 계속 실패했는데  return 문에서 발생한 에러였다.
if (stack.length > 0) {
  return false;
} else {
  return true;
}

// 위 코드는 사실상 스택의 길이가 0이면 true이고, 그렇지 않으면 false여서 한줄로 개선했다.
