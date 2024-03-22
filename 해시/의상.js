function solution(clothes) {
  const map = new Map();
  for (const [name, type] of clothes) {
    if (map.get(type)) map.set(type, map.get(type) + 1);
    else map.set(type, 1);
  }
  let result = 1;
  for (const [key, val] of map) {
    result *= val + 1;
  }
  return result - 1;
}

// 배열 순회 하면서 각 타입별 개수 확인
// 해당 종류의 의상을 입지 않는 경우도 고려하여, 의상 개수에 1을 더한 값을 result 곱하기
// 모든 의상을 입지 않는 경우를 제외하기 위해 result 1을 빼고 반환

// 1. 의상의 종류별 갯수 세기
// 2. 최소 하나의 옷을 입는다.
// 3. 옷 하나씩 조합의 수도 추가가 되니 +1
// 4. 옷 갯수 +1로 조합의 수를 넣게 되면 아예 안 입는 경우도 포함되므로 -1
