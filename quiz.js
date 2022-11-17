const submitAnswerButton = document.querySelector("#submit-answer-btn");
const outputEl = document.querySelector("#output");

const quizForm = document.querySelector(".quiz-form");

const correctAnswers = ["45°", "Right Angled", "180", "3", "right", "one right angle", "12, 16, 20", "a+b+c", "no", "45"];

function calculateScore() {
  let score = 0;
  let index = 0;
  const formResults = new FormData(quizForm);

  for (let value of formResults.values()) {
    if (value === correctAnswers[index]) {
      score = score + 1;
    }
    index = index + 1;
  }
  console.log(score);
  outputEl.innerText = "Your Score is : "+score;
}

submitAnswerButton.addEventListener("click", calculateScore);
