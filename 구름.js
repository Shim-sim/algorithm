/**
 *문제: 도현이는 바구니를 총 N개 가지고 있고, 각각의 바구니에는 1번부터 N번까지 번호가 순서대로 적혀져 있다. 바구니는 일렬로 놓여져 있고,
 *  가장 왼쪽 바구니를 1번째 바구니, 그 다음 바구니를 2번째 바구니, ..., 가장 오른쪽 바구니를 N번째 바구니라고 부른다.
 * 도현이는 앞으로 M번 바구니의 순서를 역순으로 만들려고 한다. 도현이는 한 번 순서를 역순으로 바꿀 때, 순서를 역순으로 만들 범위를 정하고, 그 범위에 들어있는 바구니의 순서를 역순으로 만든다.
 * 바구니의 순서를 어떻게 바꿀지 주어졌을 때, M번 바구니의 순서를 역순으로 만든 다음, 바구니에 적혀있는 번호를 가장 왼쪽 바구니부터 출력하는 프로그램을 작성하시오.
 */

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line.trim()); // 입력 값을 data 배열에 추가
  // 데이터 입력 카운트 증가

  if (input.length === +input[0] + 1) {
    rl.close();
  }
}).on("close", function () {
  const T = Number(input[0]);
  let result = 0;
  for (let i = 1; i < input.length; ++i) {
    let [num1, op, num2] = input[i].split(" ");
    [num1, num2] = [Number(num1), Number(num2)];
    switch (op) {
      case "+":
        result += num1 + num2;
        break;
      case "-":
        result += num1 - num2;
        break;
      case "*":
        result += num1 * num2;
        break;
      case "/":
        result += Math.trunc(num1 / num2);
        break;
      default:
        throw new Error("유효하지 않은 연산자");
    }
  }
  console.log(result);
  process.exit(); // 프로그램 종료
});

// readline 사용법 여러줄
