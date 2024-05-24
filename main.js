const questions = [
  {
    quizz_id: 1,
    question: "Trong Javascript sự kiện OnUnload thực hiện khi nào?",
    answer: [
      "Khi bắt đầu chương trình chạy",
      "Khi click chuột",
      "Khi kết thúc một chương trình",
      "Khi di chuyển chuột qua",
    ],
  },
  {
    quizz_id: 2,
    question: "Trong Javascript sự kiện Onblur thực hiện khi nào?",
    answer: [
      "Khi một đối tượng form mất focus",
      "Khi một đối tượng form có focus",
      "Khi di chuyển chuột qua form",
      "Khi click chuột vào nút lệnh",
    ],
  },
  {
    quizz_id: 3,
    question: "Trong Javascript sự kiện OnMouseOver thực hiện khi nào?",
    answer: [
      "Khi một đối tượng trong form mất focus",
      "Khi một đối tượng trong form có focus",
      "Khi di chuyển con chuột qua một đối tượng trong form",
      "Khi click chuột vào nút lệnh",
    ],
  },
  {
    quizz_id: 4,
    question: "Trong Javascript sự kiện Onclick xảy ra khi nào?",
    answer: [
      " Khi một đối tượng trong form mất focus",
      " Khi một đối tượng trong form có focus",
      " Khi click chuột vào một đối tượng trong form",
      " Khi click chuột vào nút lệnh",
    ],
  },
  {
    quizz_id: 5,
    question: "Thẻ <input type='text'> dùng để làm gì?",
    answer: [
      "Tạo một ô text để nhập dữ liệu 1 dòng",
      "Tạo một ô password",
      "Tạo một  textbox cho phép nhập liệu nhiều dòng",
      "Tất cả các ý trên",
    ],
  },
  {
    quizz_id: 6,
    question: "Thẻ <input type=”Submit” dùng để làm gì?",
    answer: [
      "Tạo một ô text để nhập dữ liệu",
      "Tạo một nút lệnh dùng để gửi tin trong form đi",
      "Tạo một nút lệnh dùng để xóa thông tin trong form",
      "Tất cả các ý trên",
    ],
  },
  {
    quizz_id: 7,
    question:
      "Cần thêm tiền tố nào để các thuộc tính CSS3 hoạt động trên trình duyệt Mozilla Firefox cũ?",
    answer: ["-webkit", "-moz-", "-o-", "-gecko-"],
  },
  {
    quizz_id: 8,
    question: "Javascript là ngôn ngữ kịch bản có dấu được mã nguồn không?",
    answer: [
      " Không dấu được vì các kịch bản chạy ở client",
      " Dấu được vì chương trình hoạt động độc lập với trình duyệt",
      " Hai phát biểu đều sai",
      " Hai phát biểu đều đúng",
    ],
  },
  {
    quizz_id: 9,
    question: "Ba giá trị đầu tiên của text-shadow theo thứ tự là gì?",
    answer: [
      "vertical, blur, horizontal",
      "blur, vertical, horizontal",
      "vertical, horizontal, blur",
      "horizontal, vertical, blur",
    ],
  },
  {
    quizz_id: 10,
    question: "RGBa có nghĩa là gì?",
    answer: [
      "Red Gold Black alpha",
      "Red Green Blue alpha",
      "Red Gray Brown alpha",
      "Red Gray Yellow alpha",
    ],
  },
  {
    quizz_id: 11,
    question: "JavaScript là ngôn ngữ xử lý ở?",
    answer: ["Client", "Sever", "Client/Server", "Tất cả"],
  },

  {
    quizz_id: 12,
    question:
      "Thứ tự xép tầng của css theo độ ưu tiên từ thấp đến cao như sau ?",
    answer: [
      "External style sheet,internal style sheet,browser default,inline style",
      "Inline style, browser default, external style sheet, internal style sheet",
      "Browser default, internal style sheet, inline style, external style sheet",
      "Browser default, external style sheet, internal style sheet, inline style",
    ],
  },
  {
    quizz_id: 13,
    question: "Hàm prompt(…) trong JavaScript dùng để làm gì?",
    answer: [
      "Hiển thị thông báo nhập thông tin",
      "Hiển thị một thông báo Yes, No",
      "Không phương án nào đúng",
      "Cả hai dạng trên",
    ],
  },
  {
    quizz_id: 14,
    question:
      "Thực hiện kiểm tra nếu biến “i” không bằng 5, câu lệnh nào là đúng?",
    answer: ["if (i != 5)", "if i <> 5", "if i =! 5 then", "if (i <> 5)"],
  },
  {
    quizz_id: 15,
    question: "Có những cách nào viết code JavaScript để chạy trong trang web?",
    answer: [
      "Cả hai dạng viết tệp riêng hoặc viết trong trang HTML",
      "Viết chung với HTML",
      "Viết trên một tệp riêng",
      "Không thuộc dạng nào",
    ],
  },
  {
    quizz_id: 16,
    question: "JavaScript là ngôn ngữ kịch bản có che dấu được mã nguồn không?",
    answer: [
      "Không dấu được vì các kịch bản chạy phía client",
      "Dấu được vì chương trình hoạt động độc lập với trình duyệt",
      "Hai phát biểu trên đều sai",
      "Hai phát biểu trên đều đúng",
    ],
  },
  {
    quizz_id: 17,
    question: "Trong JavaScript hàm parseInt() dùng để làm gì?",
    answer: [
      "Chuyển một chuỗi thành số",
      "Chuyển một chuỗi thành số thực",
      "Chuyển một số nguyên thành một chuỗi",
      "Chuyển một chuỗi thành số nguyên",
    ],
  },
  {
    quizz_id: 18,
    question: "Chúng ta đặt JavaScript bên trong phần tử HTML nào?",
    answer: [
      "<javascript>",
      "<script></script>",
      "<scripting></scripting>",
      "<js></js>",
    ],
  },
  {
    quizz_id: 19,
    question:
      "Trong JavaScript để lấy được sự kiện click của người dùng ta dùng?",
    answer: [
      "addEventListener",
      "classList.add",
      "document.querySelector",
      "innerText",
    ],
  },
  {
    quizz_id: 20,
    question: "Để làm việc với API từ server ta có thể dùng?",
    answer: [
      "fetch()",
      "axios",
      "cả hai đáp án trên",
      "không có đáp án phù hợp",
    ],
  },
];
const result = [
  {
    quizz_id: 1,
    answer: "Khi kết thúc một chương trình",
  },
  {
    quizz_id: 2,
    answer: "Khi một đối tượng form mất focus",
  },
  {
    quizz_id: 3,
    answer: "Khi di chuyển con chuột qua một đối tượng trong form",
  },
  {
    quizz_id: 4,
    answer: "Khi click chuột vào một đối tượng trong form",
  },
  {
    quizz_id: 5,
    answer: "Tạo một ô text để nhập dữ liệu 1 dòng",
  },
  {
    quizz_id: 6,
    answer: "Tạo một nút lệnh dùng để gửi tin trong form đi",
  },
  {
    quizz_id: 7,
    answer: "-moz-",
  },
  {
    quizz_id: 8,
    answer: " Không dấu được vì các kịch bản chạy ở client",
  },
  {
    quizz_id: 9,
    answer: "horizontal, vertical, blur",
  },
  {
    quizz_id: 10,
    answer: "Red Green Blue alpha",
  },
  {
    quizz_id: 11,
    answer: "Client",
  },
  {
    quizz_id: 12,
    answer:
      "Browser default, external style sheet, internal style sheet, inline style",
  },
  {
    quizz_id: 13,
    answer: "Hiển thị thông báo nhập thông tin",
  },
  {
    quizz_id: 14,
    answer: "if (i != 5)",
  },
  {
    quizz_id: 15,
    answer: "Cả hai dạng viết tệp riêng hoặc viết trong trang HTML",
  },
  {
    quizz_id: 16,
    answer: "Không dấu được vì các kịch bản chạy phía client",
  },
  {
    quizz_id: 17,
    answer: "Chuyển một chuỗi thành số nguyên",
  },
  {
    quizz_id: 18,
    answer: "<script></script>",
  },
  {
    quizz_id: 19,
    answer: "addEventListener",
  },
  {
    quizz_id: 20,
    answer: "cả hai đáp án trên",
  },
];
const quizzTime = document.querySelector(".quizz__time-show");
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
    questionCout.innerText = ` ${currentIndex + 1} / ${questions.length}`;
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
    let seconds = 30 * 60;
    const countdownInterval = setInterval(() => {
      const minutesLeft = Math.floor(seconds / 60);
      const secondsLeft = seconds % 60;
      quizzTime.innerText = `  ${minutesLeft}:${secondsLeft} `;
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
          inline: "center",
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
