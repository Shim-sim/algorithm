//  문제: 정수를 저장하는 큐를 구현한 다음, 입력으로 주어지는 명령을 처리하는 프로그램을 작성
// push X: 정수 X를 큐에 넣는 연산이다.
// pop: 큐에서 가장 앞에 있는 정수를 빼고, 그 수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// size: 큐에 들어있는 정수의 개수를 출력한다.
// empty: 큐가 비어있으면 1, 아니면 0을 출력한다.
// front: 큐의 가장 앞에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// back: 큐의 가장 뒤에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.

/**
 * 큐 자료구조를 구현하는 문제다.
 * 큐에 대한 이해와 더불어 else if 문을  사용해서 큐 자료구조를 구현했다.
 *
 * 처음 구현해보는데 pop과 front를 잘못구현하는 바램에 문제를 틀렸다.
 * pop은 제거하고 출력하는 것이고, front와 back은 출력만 하면된다.
 */

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [num, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const stack = [];
const answer = [];

for (const item of input) {
  if (item.includes("push")) {
    stack.push(+item.split(" ")[1]);
  } else if (item.includes("pop")) {
    answer.push(stack.length > 0 ? stack.shift() : -1);
  } else if (item.includes("size")) {
    answer.push(stack.length);
  } else if (item.includes("empty")) {
    answer.push(stack.length > 0 ? 0 : 1);
  } else if (item.includes("front")) {
    answer.push(stack.length > 0 ? stack[0] : -1);
  } else if (item.includes("back")) {
    answer.push(stack.length > 0 ? stack[stack.length - 1] : -1);
  }
}
console.log(answer.join("\n"));
