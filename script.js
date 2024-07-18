const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: "Paris"
    },
    {
        question: "Who is known as the Prophet of Islam?",
        options: ["Jesus", "Muhammad", "Moses", "Abraham"],
        answer: "Muhammad"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        answer: "Mars"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean", "Arctic Ocean"],
        answer: "Pacific Ocean"
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
        answer: "William Shakespeare"
    },
    {
        question: "What is the currency of Japan?",
        options: ["Yen", "Dollar", "Euro", "Pound"],
        answer: "Yen"
    },
    {
        question: "Which animal is known as the 'Ship of the Desert'?",
        options: ["Elephant", "Camel", "Horse", "Giraffe"],
        answer: "Camel"
    },
    {
        question: "What is the main source of energy for Earth?",
        options: ["The Moon", "The Sun", "Wind", "Water"],
        answer: "The Sun"
    },
    {
        question: "Who discovered gravity?",
        options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Charles Darwin"],
        answer: "Isaac Newton"
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["H2O", "CO2", "O2", "N2"],
        answer: "H2O"
    },
    {
        question: "Which country is known for the Great Wall of China?",
        options: ["India", "China", "Japan", "Korea"],
        answer: "China"
    },
    {
        question: "What is the largest continent by land area?",
        options: ["Africa", "Asia", "North America", "Europe"],
        answer: "Asia"
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Pablo Picasso", "Leonardo da Vinci", "Michelangelo", "Vincent van Gogh"],
        answer: "Leonardo da Vinci"
    },
    {
        question: "What is the capital of Brazil?",
        options: ["Rio de Janeiro", "Sao Paulo", "Brasilia", "Salvador"],
        answer: "Brasilia"
    },
    {
        question: "Which country is known for the Taj Mahal?",
        options: ["Pakistan", "India", "Bangladesh", "Sri Lanka"],
        answer: "India"
    },
    {
        question: "What is the main ingredient in chocolate?",
        options: ["Cocoa", "Vanilla", "Sugarcane", "Coffee beans"],
        answer: "Cocoa"
    },
    {
        question: "Who is known as the Father of Computers?",
        options: ["Bill Gates", "Charles Babbage", "Steve Jobs", "Alan Turing"],
        answer: "Charles Babbage"
    },
    {
        question: "What is the largest mammal on Earth?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Rhino"],
        answer: "Blue Whale"
    },
    {
        question: "Which country is known for the Eiffel Tower?",
        options: ["Italy", "France", "Spain", "Germany"],
        answer: "France"
    },
    {
        question: "What is the capital of the United States?",
        options: ["New York", "Los Angeles", "Washington D.C.", "Chicago"],
        answer: "Washington D.C."
    },
    {
        question: "Who is known as the Father of Modern Chemistry?",
        options: ["Isaac Newton", "Antoine Lavoisier", "Albert Einstein", "Galileo Galilei"],
        answer: "Antoine Lavoisier"
    },
    {
        question: "What is the main language spoken in Mexico?",
        options: ["English", "Spanish", "French", "Portuguese"],
        answer: "Spanish"
    },
    {
        question: "Which country is known for the kangaroo?",
        options: ["New Zealand", "Australia", "Papua New Guinea", "Fiji"],
        answer: "Australia"
    },
    {
        question: "What is the capital of Italy?",
        options: ["Milan", "Rome", "Venice", "Florence"],
        answer: "Rome"
    },{
        question: "What is the holiest city in Islam?",
        options: ["Mecca", "Medina", "Jerusalem", "Cairo"],
        answer: "Mecca"
      },
      {
        question: "What is the holy book of Islam?",
        options: ["Quran", "Bible", "Torah", "Bhagavad Gita"],
        answer: "Quran"
      },
      {
        question: "Who is considered the founder of Islam?",
        options: ["Prophet Muhammad", "Abraham", "Moses", "Jesus"],
        answer: "Prophet Muhammad"
      },
      {
        question: "What are the five pillars of Islam?",
        options: [
          "Shahadah (faith), Salat (prayer), Zakat (charity), Sawm (fasting), Hajj (pilgrimage)",
          "Reading Quran daily, Helping the poor, Visiting Mecca, Praying 5 times a day, Believing in one God",
          "Following the teachings of Jesus, Fasting during Ramadan, Giving to charity, Praying regularly, Performing Hajj",
          "Believing in multiple gods, Following religious leaders, Attending church services, Donating to charities, Helping those in need"
        ],
        answer: "Shahadah (faith), Salat (prayer), Zakat (charity), Sawm (fasting), Hajj (pilgrimage)"
      },
      {
        question: "During the holy month of Ramadan, Muslims do what for most of the day?",
        options: ["Fast", "Pray", "Read Quran", "Attend Mosques"],
        answer: "Fast"
      },
      {
        question: "What place do Muslims face when they pray?",
        options: ["Kaaba in Mecca", "The Church of the Holy Sepulchre", "Temples of astrafaganza", "Temple Mount and Western Wall"],
        answer: "Kaaba in Mecca"
      },
      {
        question: "What is the name of the large white cloth covering the Kaaba?",
        options: ["Kiswah", "Ihram", "Miqraab", "Hijr Ismail"],
        answer: "Kiswah"
      },
      {
        question: "What city is the Dome of the Rock located in?",
        options: ["Jerusalem", "Mecca", "Medina", "Istanbul"],
        answer: "Jerusalem"
      },
      {
        question: "What is the Islamic term for a holy war (often misunderstood)?",
        options: ["Jihad", "Fitan", "Dhikr", "Tawhid"],
        answer: "Jihad"
      },
      {
        question: "What language is the Quran originally written in?",
        options: ["Arabic", "Hebrew", "Latin", "Persian"],
        answer: "Arabic"
      },
      {
        question: "How many planets are in our solar system?",
        options: ["8", "9", "10", "11"],
        answer: "8"
      },
      {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: "Paris"
      },
      {
        question: "What is the largest ocean on Earth?",
        options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
        answer: "Pacific Ocean"
      },
      {
        question: "What is the tallest mountain in the world?",
        options: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
        answer: "Mount Everest"
      },
      {
        question: "How many days are in a week?",
        options: ["5", "6", "7", "8"],
        answer: "7"
      },
      {
        question: "What do you call a group of cows?",
        options: ["Herd", "Pack", "Pride", "Flock"],
        answer: "Herd"
      },
      {
        question: "What is the color of the sky on a clear day?",
        options: ["Blue", "Green", "Yellow", "Purple"],
        answer: "Blue"
      },
      {
        question: "What is the opposite of hot?",
        options: ["Cold", "Warm", "Lukewarm", "Fresh"],
        answer: "Cold"
      }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const scoreCounter = document.getElementById("score-counter");
const replayButton = document.getElementById("replay-btn");

let shuffledQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    score = 0;
    scoreCounter.innerText = score;
    nextButton.innerHTML = "Next";
    replayButton.style.display = "none"; // Hide the replay button
    shuffledQuestions = shuffleArray(questions).slice(0, 10); // Shuffle questions and take first 10
    currentQuestionIndex = 0;
    showQuestion();
}

function shuffleArray(array) {
    const shuffledArray = array.slice(); // Create a copy of the array to shuffle
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
}

function showQuestion() {
    resetState();
    let currentQuestion = shuffledQuestions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.innerHTML = option;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (option === currentQuestion.answer) {
            button.dataset.correct = true;
        }
        button.addEventListener("click", selectAnswer);
    });

    if (currentQuestionIndex === shuffledQuestions.length - 1) {
        nextButton.innerHTML = "Finish";
    } else {
        nextButton.innerHTML = "Next";
    }
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
        scoreCounter.innerText = score;
    } else {
        selectedBtn.classList.add("incorrect");
        const correctBtn = Array.from(answerButtons.children).find(button => button.dataset.correct === "true");
        if (correctBtn) {
            correctBtn.classList.add("correct");
        }
    }
    Array.from(answerButtons.children).forEach(button => {
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuestions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${shuffledQuestions.length}!`;
    nextButton.style.display = "none";
    replayButton.style.display = "block";
}

function replayQuiz() {
    startQuiz();
}

nextButton.addEventListener("click", handleNextButton);
replayButton.addEventListener("click", replayQuiz); 

startQuiz();