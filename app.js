const questions = document.querySelectorAll(".qst-ans");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    question.classList.toggle("active");
  });
});
