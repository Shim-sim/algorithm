function solution(priorities, location) {
  let answer = 0;
  // process와 index값 저장
  const array = priorities.map((process, index) => {
    return { process, index };
  });

  while (array.length) {
    const queue = array.shift();
    // some 메서드를 사용해서 queue.process 값보다 큰게 있는지 없는지 확인 있으면 push
    if (array.some((element) => element.process > queue.process)) {
      array.push(queue);
    } else {
      // 없으면 answer++ index값이 location이랑 같아지면 break
      answer++;
      if (queue.index === location) break;
    }
  }
  return answer;
}

// 틀릴 답안
// 처음 문제를 접근할 때 '아 queue로 접근해서 현재 값보다 큰 값이 없으면 해당 값을 리턴해야겠다'
// 라고 생각했는데 문제 자체를 잘못이해했다.
// 결국에는 프로세스가 돌 때 location의 값의 index를 기억해줘야했다.
// priorities를 array로 재배열 하만셔 index를 추가해줬고 나머지는 같은 로직으로 쉽게 해결할 수 있었다.
