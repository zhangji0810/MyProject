// Coding Challenge #1;
const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3. C++"],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = prompt(
      `${this.question}\n${this.options} (Write option number)`
    );
    if (answer >= 0 && answer <= 4) {
      this.answers[answer] += 1;
      console.log(this.answers);
    } else {
      console.log("Please choose between 0 to 4.");
    }
  },
};
document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));
