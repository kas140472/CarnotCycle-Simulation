
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
    question: "What is the working fluid for the Carnot cycle?",
    answers: {
      a: "Ideal gas",
      b: "Real gas",
      c: "Natural gas",
      d: "None of the above"
    },
    correctAnswer: "a"
  },

  {
    question: "The isothermal process of the Carnot cycle requires _____ movement of the piston to maintain constant temperature:",
    answers: {
      a: "Very slow",
      b: "Very fast",
      c: "Variable",
      d: "Medium"
    },
    correctAnswer: "a"
  },

  {
    question: "The Carnot cycle consists of:",
    answers: {
      a: "Two isochores and two isothermal curves",
      b: "Two isobars and two isothermal curves",
      c: "Two isotherms and two reversible adiabatic curves",
      d: "Two isobars and two reversible adiabatic curves"
    },
    correctAnswer: "c"
  },
  {
    question: "The area under the Carnot cycle graph represents the:",
    answers: {
      a: "Work done by the system",
      b: "Total entropy change in the system",
      c: "Heat added to the system",
      d: "Efficiency of the cycle"
    },
    correctAnswer: "a"
  },
  {
    question: "Which of the following cycles has the highest efficiency?",
    answers: {
      a: "Otto",
      b: "Brayton",
      c: "Dual",
      d: "Carnot"
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
