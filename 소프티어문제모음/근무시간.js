const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let answer = 0;
for (let i = 0; i < input.length; i++) {
  let num = 0;
  const [workIn, workOut] = input[i].split(' ');

  const [workInhour, workInMinute] = workIn.split(':').map(Number);
  const [workOutHour, workOutMinute] = workOut.split(':').map(Number);

  const inMinute = workInhour * 60 + workInMinute;
  const outMinute = workOutHour * 60 + workOutMinute;

  answer += outMinute - inMinute;
}

console.log(answer);
