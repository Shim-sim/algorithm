// function solution(s) {
//   return s.split('').map((item, index) => {
//       if (index % 2 === 0) {
//           return item.toUpperCase();
//       } else {
//           return item.toLowerCase();
//       }
//   }).join('')
// }
// 처음 문제풀이에서는 문제의 제한사항을 확실하게 파악하지 못했다.
// 문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야합니다.
// 윗 부분에서 단어를 기준으로 index를 처리하라고 했는데, 단어가 아닌 문자열의 길이를 기준으로 처리해서 실패했다.

function solution(s) {
  let answer = '';
  let words = s.split(' ');

  for (let item of words) {
    for (let i = 0; i < item.length; i++) {
      if (i % 2 === 0) {
        answer += item[i].toUpperCase();
      } else {
        answer += item[i].toLowerCase();
      }
    }
    answer += ' ';
  }
  return answer.slice(0, -1);
}

// 첫번째 문제를 해결할 때도 이번 코드와 비슷하게 코드를 작성했는데...
// answer에서 공백처리하는 방법이 떠오르지 않아서 답안을 참고했다.
// slice(begin , [endIndex])
// endIndex가 생략되면 문자열 마지막까지 추출.
// endIndex가 음수라면 문자열길이 + endIndex로 취급된다.
