import React, { useState } from "react";
import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";
import { removeCountdownTime } from "../../../util/CountTime";

export default function MakeQuizz({ quizz }) {
  console.log("quizz-MakeQuiz", quizz);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [score, setScore] = useState(0);

  const handleAnswerClick = (answerId, isCorrect) => {
    if (selectedAnswers.includes(answerId)) {
      // Deselect the answer if it's already selected
      setSelectedAnswers(selectedAnswers.filter((id) => id !== answerId));
    } else {
      setSelectedAnswers([...selectedAnswers, answerId]);
    }
  };

  const calculateScore = () => {
    let correctAnswersIds = [];

    quizz.lsQuestion.map((question) => {
      correctAnswersIds.push(
        ...question.answer
          .filter((answer) => answer.isCorrect === true)
          .map((answer) => answer.id)
      );
    });

    correctAnswersIds.map((id) => {
      if (selectedAnswers.includes(id)) {
        setScore(score + 1);
      }
    });
  };

  return (
    <>
      <h1>{quizz.title}</h1>

      {quizz.lsQuestion.map((question, index) => (
        <div key={question.id} className="question">
          <h2>{question.question}</h2>
          <ul>
            {question.answer.map((answer) => (
              <div key={answer.id}>
                <Checkbox
                  checked={selectedAnswers.includes(answer.id)}
                  onChange={() =>
                    handleAnswerClick(answer.id, answer.isCorrect)
                  }
                />
                {answer.content}
              </div>
            ))}
          </ul>
        </div>
      ))}

      <Button onClick={() => {calculateScore(); removeCountdownTime()}}>Submit</Button>

      <div className="score">
        <p>
          Score: {score}/{quizz.lsQuestion.length}
        </p>
      </div>
    </>
  );
}
