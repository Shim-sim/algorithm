const readline = require('readline');

class BaseballGame {
  constructor() {
    this.answer = this.generateAnswer();
    this.strikes = 0;
    this.balls = 0;
    this.attempts = 0;
  }

  generateAnswer() {
    const answer = [];
    while (answer.length < 3) {
      const num = Math.floor(Math.random() * 9) + 1;
      if (!answer.includes(num)) {
        answer.push(num);
      }
    }
    return answer;
  }

  checkInput(input) {
    const numbers = input.split('').map(Number);
    this.strikes = 0;
    this.balls = 0;
    for (let i = 0; i < 3; i++) {
      if (this.answer[i] === numbers[i]) {
        this.strikes++;
      } else if (this.answer.includes(numbers[i])) {
        this.balls++;
      }
    }
    this.attempts++;
  }

  play() {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question('Enter 3 numbers (1~9) separated by commas: ', (input) => {
      this.checkInput(input);
      console.log(`${this.strikes} strike(s), ${this.balls} ball(s)`);
      if (this.strikes < 3) {
        this.play();
      } else {
        console.log(`Congratulations! You won in ${this.attempts} attempts.`);
        rl.question('Do you want to play again? (yes/no) ', (answer) => {
          if (answer.toLowerCase() === 'yes') {
            this.answer = this.generateAnswer();
            this.strikes = 0;
            this.balls = 0;
            this.attempts = 0;
            this.play();
          } else {
            rl.close();
          }
        });
      }
    });
  }
}

const game = new BaseballGame();
game.play();
