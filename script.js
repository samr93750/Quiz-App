// Array of quiz questions
const questions = [
  {
    question: "Which planet is known as the 'Red Planet' ? ",
    answers: [
      { text: "Venus", correct: false },
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Saturn", correct: false },
    ],
  },
  {
    question: "Who painted the Mona Lisa?",
    answers: [
      { text: " Vincent van Gogh", correct: false },
      { text: " Pablo Picasso", correct: false },
      { text: "Michelangelo", correct: false },
      { text: "Leonardo da Vinci ", correct: true },
    ],
  },
  
  {
    question: "What is the capital city of Australia?",
    answers: [
      { text: "Sydney ", correct: false },
      { text: " Melbourne", correct: false },
      { text: " Canberra", correct: true },
      { text: "Brisbane ", correct: false },
    ],
  },
  {
    question: "In which year did the Titanic sink?",
    answers: [
      { text: "1909 ", correct: false },
      { text: "1912 ", correct: true },
      { text: "1921 ", correct: false },
      { text: " 1935", correct: false },
    ],
  },

  {
    question: "Who wrote 'Romeo and Juliet'?",
    answers: [
      { text: "William Shakespeare ", correct: true },
      { text: "Jane Austen", correct: false },
      { text: " Charles Dickens ", correct: false },
      { text: " Mark Twain ", correct: false },
    ],
  },
  {
    question: "Which country is famous for its tulips and windmills?",
    answers: [
      { text: " France", correct: false },
      { text: "Italy", correct: false },
      { text: "Netherlands ", correct: true },
      { text: "Germany ", correct: false },
    ],
  },
  {
    question: "What is the tallest mammal in the world?",
    answers: [
      { text: "Elephant ", correct: false },
      { text: " Giraffe", correct: true },
      { text: " Hippopotamus", correct: false },
      { text: "Rhino ", correct: false },
    ],
  },
  {
    question: "Who was the first man to walk on the moon?",
    answers: [
      { text: "Neil Armstrong ", correct: true },
      { text: "Buzz Aldrin ", correct: false },
      { text: " Michael Collins", correct: false },
      { text: " Yuri Gagarin ", correct: false },
    ],
  },

  {
    question: "Which continent is home to the Sahara Desert?",
    answers: [
      { text: "Africa ", correct: true },
      { text: "Asia ", correct: false },
      { text: "South America ", correct: false },
      { text: "Australia ", correct: false },
    ],
  },
  {
    question: "Which Disney movie features the song 'Let It Go'?",
    answers: [
      { text: " Cinderella", correct: false },
      { text: "Beauty and the Beast ", correct: false },
      { text: "Frozen ", correct: true },
      { text: "The Lion King ", correct: false },
    ],
  },
  {
    question: "Who is known as the father of modern physics?",
    answers: [
      { text: " Isaac Newton", correct: false },
      { text: "Albert Einstein ", correct: true },
      { text: "Galileo Galilei ", correct: false },
      { text: "Nikola Tesla ", correct: false },
    ],
  },
  {
    question: "What is the chemical symbol for water?",
    answers: [
      { text: "H2O ", correct: true },
      { text: "CO2 ", correct: false },
      { text: " NaCl", correct: false },
      { text: "O2 ", correct: false },
    ],
  },
  {
    question: "What is the largest ocean in the world?",
    answers: [
      { text: " Atlantic Ocean ", correct: false },
      { text: " Indian Ocean ", correct: false },
      { text: "Pacific Ocean ", correct: true },
      { text: "Arctic Ocean ", correct: false },
    ],
  },

  {
    question: "Who painted 'The Starry Night'?",
    answers: [
      { text: "Pablo Picasso", correct: false },
      { text: "Vincent van Gogh ", correct: false },
      { text: " Claude Monet ", correct: false },
      { text: "Salvador Dali ", correct: false },
    ],
  },
  {
    question: "Which famous scientist developed the theory of relativity?",
    answers: [
      { text: " Isaac Newton ", correct: false },
      { text: "Galileo Galilei", correct: false },
      { text: "Albert Einstein ", correct: true },
      { text: "Stephen Hawking ", correct: false },
    ],
  },
  {
    question: "What is the national flower of Japan?",
    answers: [
      { text: " Tulip", correct: false },
      { text: "Daisy ", correct: false },
      { text: "Rose ", correct: false },
      { text: "Cherry Blossom ", correct: true },
    ],
  },
  {
    question: "How many continents are there?",
    answers: [
      { text: " 5", correct: false },
      { text: " 6", correct: false },
      { text: "7 ", correct: true },
      { text: "8 ", correct: false },
    ],
  },
  {
    question: "Who wrote the Harry Potter series?",
    answers: [
      { text: "J.K. Rowling ", correct: true },
      { text: "J.R.R. Tolkien ", correct: false },
      { text: "C.S. Lewis ", correct: false },
      { text: "Roald Dahl ", correct: false },
    ],
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    answers: [
      { text: "China ", correct: false },
      { text: "Japan", correct: true },
      { text: " South Korea ", correct: false },
      { text: "Thailand ", correct: false },
    ],
  },
  {
    question: "What is the smallest bone in the human body?",
    answers: [
      { text: "Femur ", correct: false },
      { text: " Tibia", correct: false },
      { text: " Stapes", correct: true },
      { text: "Radius", correct: false },
    ],
  },
  {
    question: "Which gas do plants primarily need for photosynthesis?",
    answers: [
      { text: "Oxygen ", correct: false },
      { text: " Carbon dioxide", correct: true },
      { text: " Nitrogen", correct: false },
      { text: "Hydrogen ", correct: false },
    ],
  },
  {
    question: "What is the largest mammal in the world?",
    answers: [
      { text: "Elephant ", correct: false },
      { text: "Blue whale ", correct: true },
      { text: " Giraffe", correct: false },
      { text: "Hippopotamus ", correct: false },
    ],
  },
  {
    question: "Who invented the telephone?",
    answers: [
      { text: "Thomas Edison ", correct: false },
      { text: "Alexander Graham Bell ", correct: true },
      { text: "Nikola Tesla ", correct: false },
      { text: "Albert Einstein ", correct: false },
    ],
  },
  {
    question: "What is the currency of Japan?",
    answers: [
      { text: "Yuan ", correct: false },
      { text: "Yen ", correct: true },
      { text: " Euro", correct: false },
      { text: "Dollar ", correct: false },
    ],
  },
  {
    question: "Who is the author of 'To Kill a Mockingbird' ?",
    answers: [
      { text: " Harper Lee", correct: true },
      { text: " John Steinbeck", correct: false },
      { text: "  F. Scott Fitzgerald ", correct: false },
      { text: " Ernest Hemingway ", correct: false },
    ],
  },
  {
    question: "What is the tallest mountain in the world?",
    answers: [
      { text: "K2 ", correct: false },
      { text: "Mount Everest ", correct: true },
      { text: "Kanchenjunga ", correct: false },
      { text: "Lhotse ", correct: false },
    ],
  },
  {
    question: "Which animal is known as the 'King of the Jungle' ?",
    answers: [
      { text: "Tiger ", correct: false },
      { text: " Lion", correct: true },
      { text: " Cheetah", correct: false },
      { text: "Leopard ", correct: false },
    ],
  },
  {
    question: " Who painted the ceiling of the Sistine Chapel?",
    answers: [
      { text: " Michelangelo", correct: true },
      { text: "Leonardo da Vinci ", correct: false },
      { text: "Raphael ", correct: false },
      { text: "Donatello ", correct: false },
    ],
  },
  {
    question: "What is the chemical symbol for gold?",
    answers: [
      { text: "Ag ", correct: false },
      { text: " Au", correct: true },
      { text: "Fe ", correct: false },
      { text: "Cu ", correct: false },
    ],
  },
  {
    question: "In Greek mythology, who was the god of the sea?",
    answers: [
      { text: "Zeus ", correct: false },
      { text: "Poseidon ", correct: true },
      { text: "Hades ", correct: false },
      { text: "Apollo ", correct: false },
    ],
  },
];

// Retrieving DOM elements

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
  questionElement.innerHTML = `You scored ${score} out of ${currentQuestionIndex}  !!!`;
  document.getElementById("playagainbtn").appendChild(playAgainButton);
  playAgainButton.classList.add("playagainbtn");
  playAgainButton.innerHTML = "play again";
  playAgainButton.style.display = "block";
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
