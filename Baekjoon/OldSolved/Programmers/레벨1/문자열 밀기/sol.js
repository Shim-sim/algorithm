function solution(A, B) {
  if (A === B) return 0;
  let a = [...A];
  let cnt = 0;

  for (let i = 0; i < a.length; i++) {
    let tmp = a.pop();
    a.unshift(tmp);
    cnt++;

    if (a.join("") === B) return cnt;
  }

  return -1;
}
