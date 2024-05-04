const questions = [
  {
    quizz_id: 1,
    question: "bạn có biêt react js là gì không",
    answer: [
      "có",
      "chưa biết",
      "là một thư viện javascript",
      " là một ngôn ngữ lập trình",
    ],
  },
  {
    quizz_id: 2,
    question: "bạn có biêt js là gì không",
    answer: ["có", "chưa biết", "là  javascript", " là một ngôn ngữ lập trình"],
  },
  {
    quizz_id: 3,
    question: "bạn có biêt lập trình là làm gì không",
    answer: [
      "là tạo ra những thứ được lập trình sẵn",
      "là những thứ được con người taoh ra  như máy móc vvv",
      "là một thư viện javascript",
      " là một ngôn ngữ lập trình",
    ],
  },
  {
    quizz_id: 4,
    question: "để quản lí được biến cục bộ trong react js bạn có thể dùng gì",
    answer: ["react dom", "redux", "context api", "cả a và b"],
  },
  {
    quizz_id: 5,
    question: "bạn hiểu thế nào là ngôn ngữ máy",
    answer: [
      "là ngôn ngữ do con người tạo ra",
      "là ngôn ngữ để con người có thể làm việc được với máy móc và máy móc có thể hiểu được nó",
      "là một thư viện javascript",
      " là một ngôn ngữ lập trình",
    ],
  },
];
const result = [
  {
    quizz_id: 1,
    answer: "là một thư viện javascript",
  },
  {
    quizz_id: 2,
    answer: "là  javascript",
  },
  {
    quizz_id: 3,
    answer: "là tạo ra những thứ được lập trình sẵn",
  },
  {
    quizz_id: 4,
    answer: "cả a và b",
  },
];
const quizzTime = document.querySelector(".quizz__time");
let quizzQuestionListButton = document.querySelectorAll(
  ".quizz__questions-list li"
);
const quizzQuestionList = document.querySelector(".quizz__questions-list");
const quizzQuestion = document.querySelector(".quizz__question");
const questionTitle = document.querySelector(".quizz__title");
const questionCout = document.querySelector(".quizz__cout");
const questionAnwerItem = document.querySelectorAll(".quizz__answer__item");
const questionAnswers = document.querySelectorAll(".quizz__answer li");
const quizzNext = document.querySelector(".quizz__next");
const quizzPre = document.querySelector(".quizz__pre");
const quizzSubmit = document.querySelector(".quizz__submit");
let currentIndex = 0;
let listSubmit = [];
const quizz = {
  renderQuestionList: function () {
    let render = "";
    questions.forEach((item, index) => {
      render += `<li>${index + 1}</li>`;
    });
    quizzQuestionList.innerHTML = render;
    quizzQuestionListButton = document.querySelectorAll(
      ".quizz__questions-list li"
    );
  },
  renderQuestion: function () {
    questionCout.innerText = `Câu hỏi ${currentIndex + 1} / ${
      questions.length
    }`;
    questionTitle.innerText = `Câu ${currentIndex + 1}:  ${
      questions[currentIndex].question
    } ?`;
    questionAnwerItem.forEach((answer, index) => {
      answer.innerText = questions[currentIndex].answer[index];
      if (listSubmit[currentIndex] === index) {
        answer.classList.add("selected");
      }
    });
  },
  renderTime: function () {
    let seconds = 15 * 60;
    const countdownInterval = setInterval(() => {
      const minutesLeft = Math.floor(seconds / 60);
      const secondsLeft = seconds % 60;
      quizzTime.innerText = `Thời gian ( ${minutesLeft}:${secondsLeft} )`;
      if (seconds === 0) {
        clearInterval(countdownInterval);
        alert("Hết thời gian làm bài");
      }
      seconds--;
    }, 1000);
  },

  handleQuestionAnswers: function () {
    questionAnswers.forEach((item, index) => {
      item.addEventListener("click", () => {
        questionAnswers.forEach((answer) => {
          answer.classList.remove("selected");
        });
        item.classList.add("selected");
        listSubmit[currentIndex] = index;
        quizzQuestionListButton[currentIndex].classList.add("active");
      });
    });
  },
  handleQuestionListButton: function () {
    quizzQuestionListButton.forEach((item, index) => {
      item.addEventListener("click", () => {
        item.scrollIntoView({
          behavior: "smooth",
          block: "end",
          inline: "nearest",
        });
        currentIndex = index;
        this.renderQuestion();
        quizzQuestionListButton.forEach((button) => {
          button.classList.remove("selected");
        });
        item.classList.add("selected");
        questionAnswers.forEach((answer) => {
          answer.classList.remove("selected");
        });
        let selected = listSubmit[currentIndex];
        selected >= 0 && questionAnswers[selected].click();
      });
    });
  },
  handleNext: function () {
    quizzNext.addEventListener("click", () => {
      if (currentIndex >= questions.length - 1) {
        currentIndex = -1;
      }
      ++currentIndex;
      this.renderQuestion();
      questionAnswers[listSubmit[currentIndex]].click();
      questionAnswers[listSubmit[currentIndex]].classList.add("selected");

      quizzQuestionListButton[currentIndex].classList.add("selected");
    });
  },
  handlePre: function () {
    quizzPre.addEventListener("click", () => {
      if (currentIndex < 1) {
        currentIndex = questions.length;
      }
      --currentIndex;
      this.renderQuestion();
      questionAnswers[listSubmit[currentIndex]].click();
      questionAnswers[listSubmit[currentIndex]].classList.add("selected");
      quizzQuestionListButton[currentIndex].classList.add("selected");
    });
  },
  handleSubmit: function () {
    quizzSubmit.addEventListener("click", () => {
      const check = listSubmit.filter((item) => item >= 0);
      if (check.length === questions.length) {
        result.forEach((item, index) => {
          if (questions[index].answer[listSubmit[index]] === item.answer) {
            return;
          } else {
            quizzQuestionListButton[index].classList.add("wrong");
          }
        });
      } else {
        alert("Vui lòng chọn hết đáp án");
      }
    });
  },
  render: function () {
    this.renderQuestionList();
    this.renderQuestion();
    this.renderTime();
  },
  handle: function () {
    this.handleQuestionListButton();
    this.handleQuestionAnswers();
    this.handleNext();
    this.handlePre();
    this.handleSubmit();
  },
  start: function () {
    this.render();
    this.handle();
  },
};
quizz.start();
