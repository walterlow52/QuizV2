const questions = [

];

const question = document.getElementsByTagName("h1");
const option1 = document.querySelector("#answer1");
const option2 = document.querySelector("#answer2");
const option3 = document.querySelector("#answer3");
const option4 = document.querySelector("#answer4");
const answers = document.getElementsByTagName("li");
const submit = document.querySelector("#submit");
const score = document.querySelector("#score");

let count = 0;
let quizscore = 0;

const load = () => {
  let list = questions[count];
  question.innerText = list.question;
  option1.innerText = list.a;
  option2.innerText = list.b;
  option3.innerText = list.c;
  option4.innerText = list.d;
}
load();

const checked = () => {
  let ans;
  answers.forEach((i) => {
    if (i.checked) {
      ans = i.id;
    }
  });
  return ans;
};

const uncheck = () => {
  answers.forEach((i) => {
    i.checked = false;
  })
}

submit.addEventListener("click", () => {
  const x = checked();
  if (x === questions[count].rightAns) {
    score++;
  }
  questionCount++;
  uncheck();
  if (count < questions.length) {
    load();
  }
  else {
    score.innerHTML = `<h3> Congrats! You have completed the quiz! <br> Your score is ${score}/${questions.length}
                      <button onclick = "location.reload()"> Take the quiz again </button>`
  score.classList.remove("score");
}
})
