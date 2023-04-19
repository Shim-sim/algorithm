// 제곱함수

function power(a, b) {
  if (b === 0) return 1;
  return a * power(a, b - 1);
}

// 팩토리얼
function factorial(num) {
  if (num === 0) return 1;
  return num * factorial(num - 1);
}

//productOfArray
function productOfArray(arr) {
  if (arr.length === 0) return 1;
  return arr[0] * productOfArray(arr.slice(1));
}

// recursiveRange
function recursiveRange(num) {
  if (num === 1) return 1;
  return num + recursiveRange(num - 1);
}

//fib
function fib(x) {
  if (x === 0) return 0;
  else if (x === 1) return 1;
  else return fib(x - 1) + fib(x - 2);
}

// reverse
function reverse(str) {
  if (str === '') return '';
  else {
    return reverse(str.substring(1)) + str.charAt(0);
  }
}

//palindrome
function isPalindrome(str) {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
  return false;
}
