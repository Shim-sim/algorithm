function problem(pobi, crong) {
  if (pobi[1] - pobi[0] !== 1) return -1;
  if (crong[1] - crong[0] !== 1) return -1;

  let answer = 0;

  const pobiScore = Math.max(...pobi.map((num) => findMaxNumber(num)));
  const crongScore = Math.max(...crong.map((num) => findMaxNumber(num)));

  if (pobiScore > crongScore) answer = 1;
  else if (pobiScore < crongScore) answer = 2;

  return console.log(answer);
}

function findMaxNumber(num) {
  let arr = Array.from(String(num)).map(Number);
  let sum = arr.reduce((acc, cur) => acc + cur);
  let mul = arr.reduce((acc, cur) => acc * cur, 1);

  return Math.max(sum, mul);
}

problem([131, 132], [211, 212]);
