function solution(s) {
  let answer = 0;

  for (let i = 0; i < s.length; i++) {
    const sliceItem = s.slice(i) + s.slice(0, i);

    const stack = [];
    for (const word of sliceItem) {
      if (
        (word === ")" && stack[stack.length - 1] === "(") ||
        (word === "]" && stack[stack.length - 1] === "[") ||
        (word === "}" && stack[stack.length - 1] === "{")
      ) {
        stack.pop();
      } else {
        stack.push(word);
      }
    }

    if (!stack.length) answer++;
  }

  return answer;
}

// 간단한 문제인데 문제를 어렵게 설명하는 것 같았다.
// stack을 활용하여 올바른 괄호인지 확인하는 문제.
