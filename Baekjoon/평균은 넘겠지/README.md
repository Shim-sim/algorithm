## 문제

첫째 줄에는 테스트 케이스의 개수 C가 주어진다.
둘째 줄부터 각 테스트 케이스마다 학생의 수 N이 첫 수로 주어지고, 이어서 N명의 점수가 주어진다.
점수는 0보다 크거나 같고, 100보다 작거나 같은 정수이다.

각 케이스마다 한 줄씩 평균을 넘는 학생들의 비율을 반올림하여 소수점 셋째 자리까지 출력한다.

---

## 풀이

1.첫째줄을 제외한(테스트 케이스 개수) 나머지 줄을 기준으로 for 문을 돌려줍니다. 이때 각각 케이스에서 split 메서드를 사용하여 공백을 기준으로 나눠줍니다.

2. 배열의 첫번째 element는 학생의 수 이기 때문에 shift를 사용하여 따로 빼줍니다.

3. 평균 값을 구하기 위해서 해당하는 케이스의 총합을 구하고 학생수를 나누어 평균값을 구해줍니다.

4. 각 케이스에 forEach로 순회하여, 평균보다 큰 값이 있으면 count를 1증가 시켜줍니다.

5. 최종적으로 평균을 넘은수/ 전체학생수 \* 100을 계산하여 비율을 계산합니다.

6. 소수점 셋째 자리까지 출력하기 위하여 toFixed메서드를 사용하여 표시하고 "%"함께 출력해줍니다.
