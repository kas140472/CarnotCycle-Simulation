
// Don't touch the below code

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");


// Don't touch the above code




// Write your MCQs here --- Start --- --------------------
  const myQuestions = [
    {
      question: "If the temperatures at the cold and hot reservoirs of a Carnot engine are 300 K and 750 K respectively, what is the efficiency of the Carnot cycle?",
      answers: {
        a: "45%",
        b: "55%",
        c: "60%",
        d: "65%"
      },
      correctAnswer: "c"
    },
    {
      question: "If P1 is 1.3 kPa, v1 is 2.5 m3, v2 is 6 m3, what is the pressure at the end of the isothermal heat addition process in a Carnot cycle?",
      answers: {
        a: "0.35 kPa",
        b: "0.46 kPa",
        c: "0.51 kPa",
        d: "0.54 kPa"
      },
      correctAnswer: "d"
    },
    {
      question: "If the heat absorbed by the Carnot engine is 2.11 kJ and the heat rejected is 1.28 kJ, what is the efficiency of the engine?",
      answers: {
        a: "0.39",
        b: "0.42",
        c: "0.56",
        d: "0.61"
      },
      correctAnswer: "a"
    },
    {
      question: "If P1 is 1.3 kPa, v1 is 2.5 m3, P2 is 0.54 kPa, what is the heat absorbed by the system for a Carnot cycle?",
      answers: {
        a: "3.14 kJ",
        b: "2.84 kJ",
        c: "6.15 kJ",
        d: "5.42 kJ"
      },
      correctAnswer: "b"
    },
    {
      question: "A Carnot cycle refrigerator works between 250 K to 300 K. What is the COP value?",
      answers: {
        a: "10",
        b: "20",
        c: "25",
        d: "5"
      },
      correctAnswer: "d"
    }
  ];




// ---------------------------- End -------------------------------








  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
