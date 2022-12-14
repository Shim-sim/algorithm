const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  let lowerString = input[0].toLowerCase();
  let map = new Map();

  for (const item of lowerString) {
    if (!map.has(item)) {
      map.set(item, 1);
    } else {
      map.set(item, map.get(item) + 1);
    }
  }

  let result = "";
  let obj = Object.fromEntries(map);
  let count = 0;

  for (word in obj) {
    if (obj[word] > count) {
      count = obj[word];
      result = word.toUpperCase();
    } else if (obj[word] === count) {
      result = "?";
    }
  }

  console.log(result);
}

solution(input);
