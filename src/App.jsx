import "./App.css";
import React, { useState } from "react";

function App() {
  const questions = [
    {
      questionText: "What is 2 + 2",
      answerOptions: [
        {answerText: "6", isCorrect: false},
        {answerText: "8", isCorrect: false},
        {answerText: "22", isCorrect: false},
        {answerText: "4", isCorrect: true},
      ]
    },

    {
      questionText: "What is 2 - 2",
      answerOptions: [
        {answerText: "9", isCorrect: false},
        {answerText: "0", isCorrect: true},
        {answerText: "2", isCorrect: false},
        {answerText: "1", isCorrect: false},
      ]
    },

    {
      questionText: "What is 3 x 2",
      answerOptions: [
        {answerText: "6", isCorrect: true},
        {answerText: "8", isCorrect: false},
        {answerText: "9", isCorrect: false},
        {answerText: "10", isCorrect: false},
      ]
    },

    {
      questionText: "What is 9/3",
      answerOptions: [
        {answerText: "3", isCorrect: true},
        {answerText: "8", isCorrect: false},
        {answerText: "2", isCorrect: false},
        {answerText: "4", isCorrect: false},
      ]
    },

    {
      questionText: "What is 4 + 3",
      answerOptions: [
        {answerText: "6", isCorrect: false},
        {answerText: "7", isCorrect: true},
        {answerText: "11", isCorrect: false},
        {answerText: "9", isCorrect: false},
      ]
    },
  ]

  return (
    <>
      <section>
        <div className="card">
          <div className="question">
            <div className="questionCount">
              <p>
                <span>Question 1</span> / 5
              </p>
            </div>
            <div className="questionText">
              <p>Question goes here</p>
            </div>
          </div>
          <div className="answer">
            <button>Answer 1</button>
            <button>Answer 2</button>
            <button>Answer 3</button>
            <button>Answer 4</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
