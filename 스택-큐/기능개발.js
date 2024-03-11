function solution(progresses, speeds) {
  const answer = [];
  let days = 1;
  let result = 0;
  let process;

  while (progresses[0]) {
    // 현재 진행중인 프로세스
    process = progresses[0] + speeds[0] * days;

    // 진행률이 100%를 넘겼을 때
    if (process >= 100) {
      progresses.shift();
      speeds.shift();
      result++;
    } else {
      // 배포 완료 된 기능이 있는 경우
      if (result) {
        answer.push(result);
      }
      days++;
      result = 0;
    }
  }

  // 마지막 progresses가 끝나고 끝난 결과를 push
  answer.push(result);
  return answer;
}
