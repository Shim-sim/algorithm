//  한국중학교에 다니는 학생들은 각자 정수 번호를 갖고 있습니다. 이 학교 학생 3명의 정수 번호를 더했을 때 0이 되면 3명의 학생은 삼총사라고 합니다.
// 예를 들어, 5명의 학생이 있고, 각각의 정수 번호가 순서대로 -2, 3, 0, 2, -5일 때, 첫 번째, 세 번째, 네 번째 학생의 정수 번호를 더하면 0이므로 세 학생은 삼총사입니다. 또한, 두 번째, 네 번째, 다섯 번째 학생의 정수 번호를 더해도 0이므로 세 학생도 삼총사입니다.
// 따라서 이 경우 한국중학교에서는 두 가지 방법으로 삼총사를 만들 수 있습니다.
// 한국중학교 학생들의 번호를 나타내는 정수 배열 number가 매개변수로 주어질 때, 학생들 중 삼총사를 만들 수 있는 방법의 수를 return 하도록 solution 함수를 완성하세요.

/**
 * 프로그래머스에서 랜덤으로 문제를 푸는중에 브루트포스유형의 문제를 만났다.
 * 문제를 보자마자 완전탐색으로 풀어야한다는 사실을 알았는데 정답도 딱 들어맞았다.
 * 왜 문제를 보자마자 유형파악을 해야하는게 중요한지 알 수 있었다.
 */

function solution(number) {
  var answer = 0;
  let num = 0;
  for (let i = 0; i < number.length; i++) {
    for (let j = i + 1; j < number.length; j++) {
      for (let k = j + 1; k < number.length; k++) {
        num = number[i] + number[j] + number[k];
        if (num === 0) answer++;
      }
    }
  }
  return answer;
}
