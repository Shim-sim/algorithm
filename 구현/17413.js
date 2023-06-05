const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [input] = fs.readFileSync(filePath).toString().trim().split(/\r\n/);

function solution(input) {
  const answer = [];

  // 1) "<문자>"를 그룹화하여 패턴을 포함해 자른다.
  input = input.split(/(<[^>]*>)/);

  input.forEach((item) => {
    // 2) "<"로 시작하면 그대로 answer에 담는다.
    if (item[0] === '<') {
      answer.push(item);
    } else {
      // 3) 아닐 경우 띄어쓰기 기준으로 잘라 단어를 뒤집는다.
      item.split(/( )/).forEach((str) => {
        // 4) 뒤집은 단어를 문자열로 바꿔 answer에 담는다.
        answer.push(str.split('').reverse().join(''));
      });
    }
  });
  // answer를 문자열로 변환한다.
  console.log(answer.join(''));
}
solution(input);
