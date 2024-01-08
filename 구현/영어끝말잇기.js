function solution(n, words) {
  const arr = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const who = (i % n) + 1;
    const turn = Math.floor(i / n) + 1;

    if (i > 0 && stack.at(-1).at(-1) !== word[0]) {
      // 이전 단어의 마지막 글자와 현재 단어의 첫 글자가 다른 경우
      return [who, turn];
    }

    if (arr.includes(word)) {
      // 중복 단어인 경우
      return [who, turn];
    }

    arr.push(word); // 단어를 스택에 추가
  }

  return [0, 0]; // 규칙을 어긴 사람이 없는 경우
}

// 영어 끝말잇기

// 1. who는 배열 순회하면서 현 idx를 n으로 나눈 값에 + 1,
// 2. turn은 현 idx와 N(인원수)을 나눈값에 1을 더해준다.
// 3. words 배열을 순회하면서 겹치는 단어가 있는지 확인
// 4. words 배열 순회하면서 arr에 넣고 -> word 현재 단어가 stack 배열에 있는지 확인 -> 있으면 그 사람 누군지, 그 사람의 몇번째 turn인지 리턴
// 5. 이전 단어의 마지막 글자와 현 단어 첫 글자 다른 경우 who, turn 리턴
// 6. 규칙을 어긴 경우 [0,0] 리턴
