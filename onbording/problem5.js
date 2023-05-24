function problem5(money) {
  let bill = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let result = [];

  for (let i = 0; i < bill.length; i++) {
    result.push(Math.floor(money / bill[i]));
    money = money % bill[i];
  }

  return result;
}
