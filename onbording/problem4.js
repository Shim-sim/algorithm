function problem4(word) {
  let lowerCase = [];
  let upperCase = [];
  let answer = [];
  for (let i = 65; i <= 90; i++) upperCase.push(String.fromCharCode(i));
  for (let i = 97; i <= 122; i++) lowerCase.push(String.fromCharCode(i));

  for (const item of word) {
    if (item === ' ') answer.push(' ');

    if (lowerCase.includes(item)) {
      let idx = lowerCase.findIndex((index) => index === item);
      answer.push(lowerCase[lowerCase.length - idx - 1]);
    }

    if (upperCase.includes(item)) {
      let idx = upperCase.findIndex((index) => index === item);
      answer.push(upperCase[upperCase.length - idx - 1]);
    }
  }

  return answer;
}

// 어느 연못에 엄마 말씀을 좀처럼 듣지 않는 청개구리가 살고 있었다. 청개구리는 엄마가 하는 말은 무엇이든 반대로 말하였다.
// 엄마 말씀 word가 매개변수로 주어질 때, 아래 청개구리 사전을 참고해 반대로 변환하여 return 하도록 solution 메서드를 완성하라.

// A	B	C	D	E	F	G	H	I	J	K	L	M	N	O	P	Q	R	S	T	U	V	W	X	Y	Z
// Z	Y	X	W	V	U	T	S	R	Q	P	O	N	M	L	K	J	I	H	G	F	E	D	C	B	A

// 실행 결과 예시
// word	         result
// "I love you"	"R olev blf"
