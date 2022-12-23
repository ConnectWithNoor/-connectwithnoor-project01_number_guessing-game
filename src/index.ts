import inquirer from 'inquirer';

// random number between 1 - 10
const generatedNumber = Math.floor(Math.random() * 10) + 1;

async function askNumber() {
  const answer: { userNumber: number } = await inquirer.prompt({
    type: 'number',
    name: 'userNumber',
    message: 'Guess the number generated by the system: (1-10) ',
  });

  return answer.userNumber;
}

async function validateAnswer(answer: Number) {
  if (generatedNumber > answer) {
    return {
      status: false,
      message: 'Umm..! Close enough, try again by guessing higher number',
    };
  } else if (generatedNumber < answer) {
    return {
      status: false,
      message:
        'You are so close, but you guessed higher. Try again with a lower number',
    };
  }

  return {
    status: true,
    message: 'YOU GUESSED IT RIGHT. CONGRAGULATIONS',
  };
}

do {
  const userNumber = await askNumber();
  var result = await validateAnswer(userNumber);
  console.log(result.message);
} while (!result.status);
5;
