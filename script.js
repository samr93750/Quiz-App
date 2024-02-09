// Array of quiz questions

const questions = [
  {
    question: "አጥረየ",
    answers: [
      { text: "ቀለጠ", correct: false },
      { text: " ጥሪት አደረገ ", correct: true },
      { text: " አደላ ", correct: false },
      { text: "ባረከ  ", correct: false },
    ],
  },
  {
    question: "ሞርቅሐ",
    answers: [
      { text: "አሰረ  ", correct: false },
      { text: " ሠራ  ", correct: false },
      { text: " አመሰገነ ", correct: false },
      { text: " ላጠ", correct: true },
    ],
  },
  {
    question: "ኬንያ ",
    answers: [
      { text: "ብልሃተኛ  ", correct: true },

      { text: "አመጸኛ  ", correct: false },
      { text: "ሰነፍ  ", correct: false },
      { text: "አለሌ  ", correct: false },
    ],
  },
  {
    question: "መተንብል ",
    answers: [
      { text: "ብልጭታ   ", correct: false },
      { text: "ለማኝ  ", correct: true },
      { text: "ለጋስ  ", correct: false },
      { text: "የዋህ  ", correct: false },
    ],
  },
  {
    question: "አደመ ",
    answers: [
      { text: "ጠቆረ  ", correct: false },
      { text: "አማረ ", correct: true },
      { text: "ሆነ  ", correct: false },
      { text: "ቀደመ  ", correct: false },
    ],
  },
  {
    question: "አሣዕን ",
    answers: [
      { text: "ልብስ  ", correct: false },
      { text: "ማሰሪያ  ", correct: false },
      { text: "መቀነት  ", correct: false },
      { text: "ጫማ  ", correct: true },
    ],
  },

  {
    question: " ሰከለ ",
    answers: [
      { text: "መነጨ  ", correct: false },
      { text: "መዘነ  ", correct: false },
      { text: "ደረቀ  ", correct: false },
      { text: "አፈራ  ", correct: true },
    ],
  },
  {
    question: "ሐቅል ",
    answers: [
      { text: "ንዋይ  ", correct: false },
      { text: "ምድረ በዳ  ", correct: true },
      { text: " ለምለም ", correct: false },
      { text: " ምንጭ ", correct: false },
    ],
  },
  {
    question: "ኀሠ ",
    answers: [
      { text: "ጠረገ  ", correct: false },
      { text: " አቀፈ ", correct: false },
      { text: " ፈለገ ", correct: true },

      { text: " አለፈ ", correct: false },
    ],
  },
  {
    question: "ቆበረ ",
    answers: [
      { text: "ጽጋግ ሆነ  ", correct: true },

      { text: "በረረ  ", correct: false },
      { text: "ነጋ  ", correct: false },
      { text: "ድል መታ  ", correct: false },
    ],
  },
  {
    question: "ተዐረየ ",
    answers: [
      { text: " ተመላለሰ ", correct: false },
      { text: " ተገዳደረ  ", correct: true },
      { text: "አረሰ  ", correct: false },
      { text: "ተተከለ ", correct: false },
    ],
  },
  {
    question: "አልጸቀ ",
    answers: [
      { text: " ጥልቅ ሆነ ", correct: false },
      { text: "ተጠራጠረ  ", correct: false },
      { text: "ሰለቸ  ", correct: false },
      { text: "ደረሰ  ", correct: true },
    ],
  },
  {
    question: "ጽሕቀ ",
    answers: [
      { text: " ደረሰ ", correct: false },
      { text: "ቸኮለ ", correct: true },
      { text: "ለየ  ", correct: false },
      { text: "ፋቀ  ", correct: false },
    ],
  },
  {
    question: "ጣቃ ",
    answers: [
      { text: "አጠገብ ", correct: false },
      { text: " ጨለማ ", correct: true },
      { text: "መንገድ  ", correct: false },
      { text: "መጠጫ  ", correct: false },
    ],
  },
  {
    question: "ዓረበ  ",
    answers: [
      { text: "አተመ  ", correct: false },
      { text: "ጨለጠ  ", correct: false },
      { text: " ገባ ", correct: true },

      { text: "ቀረበ ", correct: false },
    ],
  },
  {
    question: "የበበ ",
    answers: [
      { text: "ደከመ  ", correct: false },
      { text: "እልል አለ  ", correct: true },
      { text: "ጨከነ  ", correct: false },
      { text: "አመጸ  ", correct: false },
    ],
  },
  {
    question: "አእተተ ",
    answers: [
      { text: "አታከተ  ", correct: false },
      { text: "አስወገደ  ", correct: true },
      { text: " አሳደረ ", correct: false },
      { text: "አንበረከከ  ", correct: false },
    ],
  },
  {
    question: "ገመነ ",
    answers: [
      { text: "ጮኸ  ", correct: false },
      { text: "ኃጢአት ሠራ  ", correct: true },
      { text: "ዳነ  ", correct: false },
      { text: "ገመና አወጣ  ", correct: false },
    ],
  },
  {
    question: "አውሥአ ",
    answers: [
      { text: "አወሳ  ", correct: false },
      { text: "አገባ  ", correct: false },
      { text: "አከናወነ  ", correct: false },
      { text: "መለሰ  ", correct: true },
    ],
  },
  {
    question: "ኰርዐ ",
    answers: [
      { text: " ከለከለ ", correct: false },
      { text: "መታ  ", correct: true },
      { text: "ድል ነሳ  ", correct: false },
      { text: "ጨከነ  ", correct: false },
    ],
  },
  {
    question: "አስተዳለወ ",
    answers: [
      { text: "አስለቀሰ  ", correct: false },
      { text: "አዘጋጀ  ", correct: true },
      { text: "አጠፋ  ", correct: false },
      { text: "ከፈተ  ", correct: false },
    ],
  },
  {
    question: "ፄወወ",
    answers: [
      { text: "አንቀላፋ  ", correct: false },
      { text: "ወጋ  ", correct: false },
      { text: "ገለጸ  ", correct: false },
      { text: "ማረከ ", correct: true },
    ],
  },
  {
    question: "ደለወ ",
    answers: [
      { text: "ወረወረ ", correct: false },
      { text: "ደማ  ", correct: false },
      { text: "ጨለመ  ", correct: false },
      { text: "ተገባ  ", correct: true },
    ],
  },
  {
    question: "ጓሕለወ ",
    answers: [
      { text: "ሸነገለ ", correct: true },
      { text: "ታመመ  ", correct: false },
      { text: "ደረቀ  ", correct: false },
      { text: "አበጠ  ", correct: false },
    ],
  },
  {
    question: "ጸገወ",
    answers: [
      { text: "ሰጠ ", correct: true },
      { text: "ደከመ  ", correct: false },
      { text: "ማረከ  ", correct: false },
      { text: "ተጋ ", correct: false },
    ],
  },
  {
    question: "ረገዘ ",
    answers: [
      { text: "ወለወለ ", correct: false },
      { text: " ወጋ ", correct: true },
      { text: "ጸና  ", correct: false },
      { text: "ደገፈ ", correct: false },
    ],
  },
  {
    question: "ሴሰየ ",
    answers: [
      { text: " መገበ", correct: true },
      { text: "ለየ  ", correct: false },
      { text: "አደረገ ", correct: false },
      { text: "ነዳ  ", correct: false },
    ],
  },
  {
    question: "ደኃየ ",
    answers: [
      { text: " ቆፈረ  ", correct: true },
      { text: "ታመመ  ", correct: false },
      { text: "ገለጸ  ", correct: false },
      { text: "ለመነ  ", correct: false },
    ],
  },
  {
    question: "ሮደ ",
    answers: [
      { text: "ሰገደ  ", correct: false },
      { text: "ከበበ ", correct: true },
      { text: " ደረደረ", correct: false },
      { text: "አመድ ሆነ  ", correct: false },
    ],
  },
  {
    question: "ዘበጠ",
    answers: [
      { text: "ጣፈጠ  ", correct: false },
      { text: "ጫረ  ", correct: false },
      { text: "መታ  ", correct: true },

      { text: "ለወጠ  ", correct: false },
    ],
  },
  {
    question: "ናዘዘ  ",
    answers: [
      { text: "አፈራ  ", correct: false },
      { text: "ነጻ አወጣ  ", correct: false },
      { text: " አረጋጋ ", correct: true },

      { text: " ፈነዳ  ", correct: false },
    ],
  },
  {
    question: "ሐብለየ  ",
    answers: [
      { text: "ተጠራጠረ  ", correct: true },
      { text: "ታከተ ", correct: false },
      { text: "አጨ   ", correct: false },

      { text: " ጸና  ", correct: false },
    ],
  },
  {
    question: "በልየ  ",
    answers: [
      { text: " አረጀ ", correct: true },
      { text: "ተደሰተ", correct: false },
      { text: " ተለያየ  ", correct: false },

      { text: " ታመነ   ", correct: false },
    ],
  },
  {
    question: "ጥዕየ  ",
    answers: [
      { text: "ዳነ   ", correct: true },
      { text: "ታመመ  ", correct: false },
      { text: " ተጎዳ  ", correct: false },

      { text: "ዋኘ   ", correct: false },
    ],
  },
  {
    question: "ፈደየ  ",
    answers: [
      { text: "አዘነ   ", correct: false },
      { text: "ከፈለ  ", correct: true },
      { text: "ጨመረ   ", correct: false },

      { text: " ተጣራ ", correct: false },
    ],
  },
  {
    question: "ሔደ  ",
    answers: [
      { text: " አከበረ ", correct: false },
      { text: "ፈጠረ ", correct: false },
      { text: " ቀማ ", correct: true },

      { text: " ሰበሰበ ", correct: false },
    ],
  },
  {
    question: "ተአንገደ  ",
    answers: [
      { text: "ተዛመደ   ", correct: false },
      { text: " ታገደ ", correct: false },
      { text: " እንግዳ ሆነ  ", correct: true },

      { text: "አከበረ  ", correct: false },
    ],
  },
  {
    question: "ሐገገ ",
    answers: [
      { text: " ተወ ", correct: false },
      { text: " ተደበቀ ", correct: false },
      { text: " ሕግ ደነገገ  ", correct: true },

      { text: "ተዘባበተ   ", correct: false },
    ],
  },
  {
    question: "ነትገ  ",
    answers: [
      { text: "ወጣ   ", correct: false },
      { text: "አሰረ  ", correct: false },

      { text: "ነዳ   ", correct: false },
      { text: "ጎደለ   ", correct: true },
    ],
  },
  {
    question: "ተመይጠ  ",
    answers: [
      { text: "ተመለሰ   ", correct: true },

      { text: " ጨመረ  ", correct: false },
      { text: "ነካ  ", correct: false },

      { text: "ተሸጠ   ", correct: false },
    ],
  },
  {
    question: "አምሠጠ  ",
    answers: [
      { text: " አበላ  ", correct: false },
      { text: "አመለጠ  ", correct: true },

      { text: "ላጠ  ", correct: false },

      { text: " አባበለ  ", correct: false },
    ],
  },
  {
    question: "ቀብጸ  ",
    answers: [
      { text: "አፈረ   ", correct: false },
      { text: " ተስፋ ቆረጠ   ", correct: true },

      { text: "ዘለለ  ", correct: false },

      { text: " ሮጠ  ", correct: false },
    ],
  },
  {
    question: "ሐፀ  ",
    answers: [
      { text: "ሰራ   ", correct: false },
      { text: "በላ  ", correct: false },
      { text: "ጎደለ   ", correct: true },

      { text: " ቆረጠ  ", correct: false },
    ],
  },
  {
    question: "ነቅጸ  ",
    answers: [
      { text: "ደረቀ   ", correct: true },
      { text: "ተዋረደ  ", correct: false },
      { text: " ፈተነ  ", correct: false },

      { text: " ዝም አለ  ", correct: false },
    ],
  },
  {
    question: " አንፈርዓፀ ",
    answers: [
      { text: "አዘነ   ", correct: false },
      { text: "በደስታ ዘለለ ", correct: true },
      { text: "ዝም አለ   ", correct: false },

      { text: "ተመለሰ   ", correct: false },
    ],
  },
  {
    question: "ደምፀ  ",
    answers: [
      { text: "ተሰማ   ", correct: true },
      { text: "ታመመ ", correct: false },
      { text: "ዱር ሆነ   ", correct: false },

      { text: " ወጋ ", correct: false },
    ],
  },
  {
    question: "ቄቅሐ  ",
    answers: [
      { text: "ፈተገ  ", correct: true },

      { text: " አረመ  ", correct: false },
      { text: " ባረከ ", correct: false },

      { text: "መነጨ   ", correct: false },
    ],
  },
  {
    question: " አንጦለለ ",
    answers: [
      { text: " አጠረ  ", correct: false },
      { text: "አጠፋ  ", correct: false },
      { text: "ጋረደ   ", correct: true },

      { text: " በረታ  ", correct: false },
    ],
  },
  {
    question: "ኖመ",
    answers: [
      { text: "ከዳ   ", correct: false },
      { text: "ጠቀለለ  ", correct: false },
      { text: " ተኛ  ", correct: true },

      { text: " ተዘረጋ  ", correct: false },
    ],
  },
  {
    question: "አውቀፈ  ",
    answers: [
      { text: " አረፈ  ", correct: false },
      { text: "አሰናከለ  ", correct: false },
      { text: "ወርቅ ሰራ   ", correct: true },

      { text: "ጉድጓድ ቆፈረ   ", correct: false },
    ],
  },
  {
    question: "አስተሐየጸ  ",
    answers: [
      { text: "ተመለከተ   ", correct: true },

      { text: " አለዘበ  ", correct: false },
      { text: " ዓመጸ ", correct: false },

      { text: " አጣላ  ", correct: false },
    ],
  },
  {
    question: "አዕቀጸ  ",
    answers: [
      { text: "ፈተነ   ", correct: false },
      { text: "ተገዳደረ  ", correct: false },

      { text: " አሰረ  ", correct: false },
      { text: "አሰነካከለ   ", correct: true },
    ],
  },
  {
    question: " ዐበረ ",
    answers: [
      { text: "ለቀመ   ", correct: false },
      { text: "አከማቸ  ", correct: false },
      { text: "ደረቀ   ", correct: true },

      { text: "አደቀቀ  ", correct: false },
    ],
  },
  {
    question: " አሥገረ ",
    answers: [
      { text: " አዘጋጀ  ", correct: false },
      { text: " ጎደለ ", correct: false },

      { text: "አበደረ   ", correct: false },
      { text: "አጠመደ   ", correct: true },
    ],
  },
  {
    question: "አመረ  ",
    answers: [
      { text: "አማረ  ", correct: false },
      { text: " ነገር ", correct: false },
      { text: "አመለከተ   ", correct: true },

      { text: " ሞከረ  ", correct: false },
    ],
  },
  {
    question: "አንከረ  ",
    answers: [
      { text: " አደነቀ  ", correct: true },

      { text: "ዘመረ   ", correct: false },
      { text: "ጮኸ ", correct: false },

      { text: "አወረደ   ", correct: false },
    ],
  },
  {
    question: "ረፈቀ  ",
    answers: [
      { text: "ጨፈረ  ", correct: false },
      { text: " ነፋ ", correct: false },
      { text: "ተቀመጠ   ", correct: true },
      { text: "አጠበቀ  ", correct: false },
    ],
  },
  {
    question: "ነደቀ  ",
    answers: [
      { text: "ደረሰ  ", correct: false },
      { text: "ሰራ  ", correct: true },
      { text: " ተጨነቀ  ", correct: false },
      { text: "ያዘ  ", correct: false },
    ],
  },
  {
    question: "ቤተ  ",
    answers: [
      { text: "ቤት ሰራ  ", correct: false },
      { text: "አደረ  ", correct: true },
      { text: " ሰለጠነ  ", correct: false },
      { text: "ፈጠነ  ", correct: false },
    ],
  },
  {
    question: "ተዛውአ  ",
    answers: [
      { text: "አሸሸ  ", correct: false },
      { text: "ተጫወተ  ", correct: true },
      { text: "ተጋደመ   ", correct: false },
      { text: "ተጣበቀ  ", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("nextbtn");
const quitButton = document.getElementById("quitbtn");
const playAgainButton = document.createElement("button");

// Variables to manage quiz state
let currentQuestionIndex = 0;
let score = 0;

// Function to start the quiz
function startQuiz() {
  // Resetting quiz state
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  quitButton.innerHTML = "Quit";
  // Displaying the first question
  showQuestion();
}

console.log(questions.length)
// Function to display a question
function showQuestion() {
  // Resetting state
  resetState();
  // Retrieving current question
  let currentQuestion = questions[currentQuestionIndex];
  questionElement.innerHTML = currentQuestion.question;

  // Displaying answer options as buttons
  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}


// Function to reset the state of the quiz
function resetState() {
  nextButton.style.display = "none";
  quitButton.style.display = "none";
  while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild);
  }
}

// Function to handle user's answer selection
function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  // Disabling all answer buttons
  Array.from(answerButton.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  // Displaying next and quit buttons
  nextButton.style.display = "block";
  quitButton.style.display = "block";
}

// Function to display the final score
function showScore(currentQuestionIndex) {
  resetState();
  goodscore= currentQuestionIndex
  if (score >= goodscore){
      questionElement.innerHTML = `Good job! You scored ${score} out of ${currentQuestionIndex}`;
      document.getElementById("playagainbtn").appendChild(playAgainButton);
      playAgainButton.classList.add("playagainbtn");
      playAgainButton.innerHTML = "play again";
      playAgainButton.style.display = "block";
  }

  else{
questionElement.innerHTML = `You scored ${score} out of ${currentQuestionIndex}  !!!`;
document.getElementById("playagainbtn").appendChild(playAgainButton);
playAgainButton.classList.add("playagainbtn");
playAgainButton.innerHTML = "play again";
playAgainButton.style.display = "block";
  } 

}


// Function to handle the next button click
function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore(currentQuestionIndex);
  }
}


// Event listener for the next button
nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});


// Event listener for the play again button
playAgainButton.addEventListener("click", () => {
  startQuiz();
shuffleArray(questions);

  document.getElementById("playagainbtn").removeChild(playAgainButton);
});


// Function to shuffle array elements
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}


// Event listener for the quit button
quitButton.addEventListener("click", () => {
  showScore(currentQuestionIndex+1);
});


// Shuffle the questions array before starting the quiz
shuffleArray(questions);

// Starting the quiz
startQuiz();
