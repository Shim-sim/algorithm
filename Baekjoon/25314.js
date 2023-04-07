/** 간단한 반복문 문제.
 * 출력 되어야 하는 long, int를 변수에 담아준다.
 * long은 4바이트 마다 한번 씩 int는 마지막 문자열에 추가해준다.
 * long은 각 문자열 마다 공백이 추가된다.
 * 풀이방법:
 *  나는 repeat메서드를 활용해서 인풋값  4만큼 long을 찍어주고 int를 마지막에 함께 추가해줬다.
 *
 */

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const long = "long ";
const int = "int";

console.log(long.repeat(input[0] / 4) + int);
