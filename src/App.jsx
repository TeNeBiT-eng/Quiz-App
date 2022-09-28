import "./App.css";
import React, { useState } from "react";

function App() {
  const questions = [
    {
      questionText: "What is 2 + 2",
      answerOptions: [
        { answerText: "6", isCorrect: false },
        { answerText: "8", isCorrect: false },
        { answerText: "22", isCorrect: false },
        { answerText: "4", isCorrect: true },
      ],
    },

    {
      questionText: "What is 2 - 2",
      answerOptions: [
        { answerText: "9", isCorrect: false },
        { answerText: "0", isCorrect: true },
        { answerText: "2", isCorrect: false },
        { answerText: "1", isCorrect: false },
      ],
    },

    {
      questionText: "What is 3 x 2",
      answerOptions: [
        { answerText: "6", isCorrect: true },
        { answerText: "8", isCorrect: false },
        { answerText: "9", isCorrect: false },
        { answerText: "10", isCorrect: false },
      ],
    },

    {
      questionText: "What is 9/3",
      answerOptions: [
        { answerText: "3", isCorrect: true },
        { answerText: "8", isCorrect: false },
        { answerText: "2", isCorrect: false },
        { answerText: "4", isCorrect: false },
      ],
    },

    {
      questionText: "What is 4 + 3",
      answerOptions: [
        { answerText: "6", isCorrect: false },
        { answerText: "7", isCorrect: true },
        { answerText: "11", isCorrect: false },
        { answerText: "9", isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);

  // const nxtQuestion = currentQuestion + 1;
  // const prvQuestion = currentQuestion + 1;

  const [showScore, setShowScore] = useState(false);

  const [score, setScore] = useState(0);

  const answerBtnClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <>
      <section>
        {/* <p className="NB">
          <span className="note">NOTE TO SELF:</span> ONCE YOU PICK AN ANSWER
          THERE'S NO GOING BACK, SO THINK CAREFULLY
        </p> */}
        {showScore ? (
          <div className="scoreSection">
            <p>
              You scored {score} out of {questions.length}
            </p>
            <button onClick={setCurrentQuestion}>Reset Quiz</button>
          </div>
        ) : (
          <div className="card">
            <div className="question">
              <div className="questionCount">
                <p>
                  <span>Question {currentQuestion + 1}</span> /{" "}
                  {questions.length}
                </p>
              </div>
              <div className="questionText">
                <p>{questions[currentQuestion].questionText}</p>
              </div>
            </div>
            <div className="answer">
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <button onClick={() => answerBtnClick(answerOption.isCorrect)}>
                  {answerOption.answerText}
                </button>
              ))}
            </div>
            {/* <button onClick={prvQuestion}>Prev</button>
            <button onClick={nxtQuestion}>Next</button> */}
          </div>
        )}
      </section>
    </>
  );
}

export default App;
