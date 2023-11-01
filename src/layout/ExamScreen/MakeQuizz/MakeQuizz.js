import React, { useState } from "react";
import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";
import { removeCountdownTime } from "../../../util/CountTime";
import { SubmitAnswer } from "../ExamService";
import { useNavigate } from "react-router-dom";
import { ProgressSpinner } from "primereact/progressspinner";

export default function MakeQuizz({ quizz }) {
  console.log("quizz-MakeQuiz", quizz);
  const [selectedAnswers, setSelectedAnswers] = useState(
    JSON.parse(localStorage.getItem("selectedAnswers")) || []
  );
  let navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleAnswerClick = (questionId, answerId) => {
    const answerIndex = selectedAnswers.findIndex(
      (item) => item.quesId === questionId && item.answerId === answerId
    );

    if (answerIndex !== -1) {
      // If the answer is already selected, remove it from selectedAnswers
      const updatedAnswers = [...selectedAnswers];
      updatedAnswers.splice(answerIndex, 1);
      setSelectedAnswers(updatedAnswers);
      localStorage.setItem("selectedAnswers", JSON.stringify(updatedAnswers));
    } else {
      // If the answer is not selected, add it to selectedAnswers
      const newAnswer = {
        quesId: questionId,
        answerId: answerId,
      };
      setSelectedAnswers([...selectedAnswers, newAnswer]);
      localStorage.setItem("quizzId", quizz.id);
      localStorage.setItem(
        "selectedAnswers",
        JSON.stringify([...selectedAnswers, newAnswer])
      );
    }
  };

  let questions = Object.values(quizz.lsQuizz);

  let handleSubmit = () => {
    setIsLoading(true);
    // End time
    removeCountdownTime();
    // Remove saved answer
    localStorage.removeItem("selectedAnswers");
    // send result to server -> get score
    SubmitAnswer(quizz.id, selectedAnswers).then((score) => {
      console.log("score", score);
      setIsLoading(false);
      navigate(`/exam/finish`, { state: { score: score } });
    });
  };

  return (
    <>
      <h1>{quizz.title}</h1>
      <p>{quizz.description}</p>
      {/* <p>{JSON.stringify(selectedAnswers)}</p> */}

      {questions.map((question, index) => (
        <div key={question.id} className="question">
          <h2>{question.content}</h2>
          <ul>
            {question.isMutiple && (
              <p style={{ color: "blue" }}>Please choose only 1 answer</p>
            )}
            {!question.isMutiple && (
              <p style={{ color: "blue" }}>
                Maybe there are more than 1 right answer
              </p>
            )}
            {question.answer.map((answer) => (
              <div key={answer.id}>
                <Checkbox
                  checked={selectedAnswers.some(
                    (item) =>
                      item.quesId === question.id && item.answerId === answer.id
                  )}
                  onChange={() => handleAnswerClick(question.id, answer.id)}
                />
                {answer.content}
              </div>
            ))}
          </ul>
        </div>
      ))}

      <Button onClick={() => handleSubmit()}>Submit</Button>

      {isLoading ? <ProgressSpinner /> : <></>}
    </>
  );
}
