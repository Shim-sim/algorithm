function solution(s) {
  let answer = [];
  let compare = [];

  s.split("").forEach((item) => {
    if (!compare.includes(item)) {
      answer.push(-1);
      compare.push(item);
    } else {
      const last = compare.lastIndexOf(item);
      compare.push(item);
      answer.push(compare.length - 1 - last);
    }
  });
  return answer;
}

// 1. 문자열 s를 순회할 수 있는 배열로 바꿔준다.
// 2. 빈 배열 compare을 만들어 배열을 순회하고 push해준다.
// 3. compare 안에 해당하는 문자열이 있을 때와 없을 때를 분기처리해준다.
// 4. 문자가 포함하지 않으면 answer.push(-1), compare.push(item)을 해준다.
// 5. 그렇지 않을 경우 먼저 compare에서 동일한 문자열의 마지막 index를 찾아 저장하고, 값을 푸쉬해준다음
// 6. (compare.length - 1) - lastIndex의 값을 answer에 Push 해준다.
// 7. answer을 return한다.
