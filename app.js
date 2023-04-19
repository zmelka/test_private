const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "ejs"); // ejs 템플릿 엔진 사용
app.use(express.static("public")); // 정적 파일(css, js 등)을 사용하기 위해 public 폴더를 사용

// 랜덤 문제 생성 함수

function getRandomQuestion() {
  const randomIndex = Math.floor(Math.random() * questions.length);
  return questions[randomIndex];
}

app.post("/contact", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  // 이메일 전송 등의 로직을 추가합니다.
  res.send("메시지가 전송되었습니다.");
});

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  const question = getRandomQuestion(); // 랜덤 문제 생성
  res.render("about", { question }); // 생성된 문제를 about 페이지에 전달
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

// 랜덤 문제 생성 함수
const questions = [
  {
    question: "스마트폰이란=[ ] +[ ]+ 휴대용게임기. 빈칸에 써넣으시오.",
    answer: ["전화기", "컴퓨터"],
  },
  { question: "세계에서 가장 큰 바다는?", answer: ["태평양"] },
  { question: "지구에서 가장 높은 산은?", answer: ["에베레스트"] },
  { question: "컴퓨터의 반대말은?", answer: ["인간"] },
  { question: "mp3 플레이어의 약자는?", answer: ["MPEG-1 Audio Layer 3"] },
];

// about 페이지 라우팅
app.get("/about", (req, res) => {
  const question = questions[Math.floor(Math.random() * questions.length)];
  res.render("about", { question });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
