const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let [weight, N] = input.shift().split(" ").map(Number);

const arr = input.map((item) => item.split(" ").map(Number));
const jewelry = arr.sort((a, b) => b[1] - a[1]);

let totalPrice = 0;

for (const [W, Price] of jewelry) {
  if (weight > W) {
    totalPrice += W * Price;
    weight -= W;
  } else {
    totalPrice += weight * Price;
    break;
  }
}

console.log(totalPrice);
