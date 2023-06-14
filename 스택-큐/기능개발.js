function solution(progresses, speeds) {
  const answer = [];
  let days = 1;
  let cnt = 0;
  let progress = 0;

  // 모든 작업이 끝날때까지 반복
  while (progresses[0]) {
    progress = progresses[0] + speeds[0] * days;

    if (progress >= 100) {
      cnt++;
      progresses.shift();
      speeds.shift();
    } else {
      // 배포 완료된 기능이 있는 경우
      if (cnt > 0) {
        answer.push(cnt);
      }
      days++;
      cnt = 0;
    }
  }

  answer.push(cnt);
  return answer;
}

const progresses = [93, 30, 55];
const speeds = [1, 30, 5];

console.log(solution(progresses, speeds));
