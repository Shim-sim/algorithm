function solution(numbers) {
  let BruteForce = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (i !== j) {
        BruteForce.push(numbers[i] * numbers[j]);
      }
    }
  }

  return Math.max(...BruteForce);
}
