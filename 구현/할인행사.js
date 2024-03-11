// 프로그래머스_할인행사

function solution(want, number, discount) {
  let answer = 0;

  const discountfunc = (sliceCount) => {
    const map = new Map();

    sliceCount.forEach((item) => map.set(item, (map.get(item) || 0) + 1));

    for (let i = 0; i < want.length; i++) {
      if (map.get(want[i]) !== number[i]) return false;
    }

    return true;
  };

  for (let i = 0; i <= discount.length - 10; i++) {
    const sliceCount = discount.slice(i, i + 10);

    if (discountfunc(sliceCount)) answer++;
  }

  return answer;
}

//우선 총 개수는 10개로 고정
//10개씩 슬라이딩해서 10일간 할인하는 목록과 사야할 품목의 개수를 비교
// 결국에는 품목의 개수의 비교를 어떻게 해줄거냐가 관건
