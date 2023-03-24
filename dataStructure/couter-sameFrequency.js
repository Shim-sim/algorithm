/**
Frequency Counter - sameFrequency
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:

Time: O(N)

Sample Input:

sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false
 */

function sameFrequency(num1, num2) {
  let str1 = num1.toString();
  let str2 = num2.toString();

  if (str1.length !== str2.length) return false;

  let obj1 = {};
  let obj2 = {};

  for (let i = 0; i < str1.length; i++) {
    obj1[str1[i]] = obj1[str1[i]] ? obj1[str1[i]]++ : 1;
  }

  for (let j = 0; j < str1.length; j++) {
    obj2[str2[j]] = obj2[str2[j]] ? obj2[str2[j]]++ : 1;
  }

  for (let key in str1) {
    if (obj1[key] !== obj2[key]) return false;
  }

  return true;
}

// 우선 두개의 인자를 문자열로 변환시켜준다.
// 두 인자의 길이가 같아야 한다.
// 두 인자의 숫자의 빈도수가 같아야 한다.
// 길이도 같고, 숫자의 빈도수도 같으면 true를 리턴한다.
// 빈 객체 두개를 생성하여 두 값을 key, value형태로 저장해준다.

sameFrequency(182, 281); // true
sameFrequency(34, 14); // false
sameFrequency(3589578, 5879385); // true
sameFrequency(22, 222); // false
