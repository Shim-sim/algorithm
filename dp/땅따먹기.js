function solution(land) {
  const length = land.length;

  for (let i = 0; i < length - 1; i++) {
    land[i + 1][0] += Math.max(land[i][1], land[i][2], land[i][3]);
    land[i + 1][1] += Math.max(land[i][0], land[i][2], land[i][3]);
    land[i + 1][2] += Math.max(land[i][0], land[i][1], land[i][3]);
    land[i + 1][3] += Math.max(land[i][0], land[i][1], land[i][2]);
  }

  return Math.max(
    land[length - 1][0],
    land[length - 1][1],
    land[length - 1][2],
    land[length - 1][3]
  );
}
