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
  // {
  //   question: "Which animal is known as the 'King of the Jungle' ?",
  //   answers: [
  //     { text: "Tiger ", correct: false },
  //     { text: " Lion", correct: true },
  //     { text: " Cheetah", correct: false },
  //     { text: "Leopard ", correct: false },
  //   ],
  // },
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
// const codingquestions = [
//   {
//     question: "In HTML, what does the 'href' attribute specify?",
//     answers: [
//       { text: "The type of HTML element", correct: false },
//       { text: "The color of the text", correct: false },
//       {
//         text: " The location of the linked document or resource",
//         correct: true,
//       },
//       { text: "The alignment of the element on the page", correct: false },
//     ],
//   },
//   {
//     question: "Which of the following is NOT a valid CSS selector?",
//     answers: [
//       { text: "class-name", correct: false },
//       { text: "  #id-name", correct: false },
//       { text: " @attribute", correct: true },
//       { text: " element-name", correct: false },
//     ],
//   },
//   {
//     question:
//       " What is the purpose of the 'document.getElementById()' method in JavaScript?",
//     answers: [
//       {
//         text: "It retrieves the value of an element's attribute.",
//         correct: true,
//       },
//       {
//         text: " It selects an HTML element based on its class name.",
//         correct: false,
//       },
//       {
//         text: " It retrieves an HTML element from the DOM by its ID.",
//         correct: false,
//       },
//       {
//         text: " It creates a new HTML element and appends it to the document.",
//         correct: false,
//       },
//     ],
//   },
//   {
//     question: "What does the CSS property 'display: none;' do?",
//     answers: [
//       {
//         text: "It hides an element from view without affecting layout.",
//         correct: true,
//       },
//       {
//         text: " It changes the font size of the text within an element.",
//         correct: false,
//       },
//       { text: " It removes the border from an element.", correct: false },
//       {
//         text: "It aligns an element to the center of its container.",
//         correct: false,
//       },
//     ],
//   },
//   {
//     question: "In JavaScript, what does the 'addEventListener()' method do?",
//     answers: [
//       {
//         text: " It sets a timer to execute a function after a specified delay.",
//         correct: false,
//       },
//       {
//         text: "It adds an event listener to an HTML element, allowing it to respond to specific events.",
//         correct: true,
//       },
//       {
//         text: "It checks if a variable is equal to a specific value.",
//         correct: false,
//       },
//       { text: " It concatenates two strings together.", correct: false },
//     ],
//   },
//   {
//     question: "What is the purpose of the " < script > " tag in HTML?",
//     answers: [
//       {
//         text: "It defines a section of text that should be displayed as code.",
//         correct: false,
//       },
//       {
//         text: "It includes an external CSS stylesheet in an HTML document.",
//         correct: false,
//       },
//       {
//         text: "It imports JavaScript code into an HTML document.",
//         correct: true ,
//       },
//       { text: "It creates a hyperlink to another web page.", correct: false },
//     ],
//   },
//   {
//     question: "Which CSS property is used to change the color of text?",
//     answers: [
//       { text: " background-color", correct: false },
//       { text: "font-weight", correct: false },
//       { text: " color", correct: true },
//       { text: " text-decoration", correct: false },
//     ],
//   },
//   {
//     question: " What is the purpose of the 'float' property in CSS?",
//     answers: [
//       { text: " It aligns text within an element.", correct: false },
//       { text: " It creates space between elements.", correct: false },
//       {
//         text: " It positions an element to the left or right of its container, allowing content to flow around it.",
//         correct: true,
//       },
//       {
//         text: "  It hides an element from view without affecting layout.",
//         correct: false,
//       },
//     ],
//   },
//   {
//     question: "What does the JavaScript 'parseInt()' function do?",
//     answers: [
//       { text: " It converts a string to an integer.", correct: true },
//       {
//         text: " It rounds a floating-point number to the nearest integer.",
//         correct: fase,
//       },
//       { text: "  It returns the length of a string.", correct: false },
//       { text: " It converts a number to a string.", correct: false },
//     ],
//   },
//   {
//     question: " Which HTML tag is used to create a hyperlink?",
//     answers: [
//       { text: " <a>", correct: true },
//       { text: "  <link>", correct: fase },
//       { text: " <h1>", correct: false },
//       { text: "  <p>", correct: false },
//     ],
//   },
//   {
//     question: "What is JSX in the context of React.js?",
//     answers: [
//       {
//         text: "A JavaScript library for building user interfaces.",
//         correct: false,
//       },
//       {
//         text: "A syntax extension that allows writing HTML-like code within JavaScript.",
//         correct: true,
//       },
//       {
//         text: "A package manager used for installing React components.",
//         correct: false,
//       },
//       {
//         text: "A build tool for optimizing React applications.",
//         correct: false,
//       },
//     ],
//   },
//   {
//     question: " In React.js, what does the 'state' represent?",
//     answers: [
//       {
//         text: " The data passed down from parent to child components.",
//         correct: false,
//       },
//       { text: " The properties of a React component.", correct: false },
//       {
//         text: " The internal data of a component that can change over time.",
//         correct: true,
//       },
//       { text: " The lifecycle methods of a component.", correct: false },
//     ],
//   },
//   {
//     question: "What is the purpose of the 'useState' hook in React?",
//     answers: [
//       {
//         text: " It imports external libraries into a React component.",
//         correct: false,
//       },
//       {
//         text: "  It updates the state of a functional component.",
//         correct: true,
//       },
//       {
//         text: " It defines a route for client-side routing in a React application.",
//         correct: false,
//       },
//       {
//         text: " It triggers an effect to be executed after rendering.",
//         correct: false,
//       },
//     ],
//   },
//   {
//     question: " What does the 'this' keyword refer to in JavaScript?",
//     answers: [
//       { text: " The current iteration of a loop.", correct: false },
//       { text: " The parent element of a nested HTML element.", correct: false },
//       {
//         text: "The context within which a function is executed.",
//         correct: true,
//       },
//       {
//         text: "The name of a variable holding a reference to a DOM element.",
//         correct: false,
//       },
//     ],
//   },
//   {
//     question: "What is a closure in JavaScript?",
//     answers: [
//       { text: " A built-in function for sorting arrays.", correct: false },
//       {
//         text: " A method for accessing variables from outside their scope.",
//         correct: false,
//       },
//       {
//         text: " A way to protect data from being modified by other functions.",
//         correct: false,
//       },
//       {
//         text: " A combination of a function and the lexical environment within which that function was declared.",
//         correct: true,      },
//     ],
//   },
//   {
//     question: "What does the spread syntax (...) do in JavaScript?",
//     answers: [
//       { text: "It combines two arrays into one.", correct: false },
//       {
//         text: "It allows an object to be expanded into multiple arguments.",
//         correct: true,
//       },
//       { text: "It rounds a number to the nearest integer.", correct: false },
//       { text: "It removes duplicates from an array.", correct: false },
//     ],
//   },
// ];


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
