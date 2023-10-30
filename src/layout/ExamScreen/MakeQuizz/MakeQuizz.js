import React, { useState } from "react";
import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";
import { removeCountdownTime } from "../../../util/CountTime";
import { SubmitAnswer } from "../ExamService";
import { useNavigate } from "react-router-dom";
import { ProgressSpinner } from "primereact/progressspinner";

export default function MakeQuizz({ quizz }) {
  console.log("quizz-MakeQuiz", quizz);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  let [check, setCheck] = useState([]);
  let navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleAnswerClick = (questionId, answerId) => {
    if (check.includes(answerId)) {
      // If the Checkbox is already checked, uncheck it and remove it from the selectedAnswers and check arrays
      setCheck(check.filter((id) => id !== answerId));
      let tmp = selectedAnswers.filter(
        (item) => !(item.quesId === questionId && item.answerId === answerId)
      );
      setSelectedAnswers(tmp);
      localStorage.setItem("selectedAnswers", JSON.stringify(tmp));
    } else {
      setCheck([...check, answerId]);
      let tmp = [
        ...selectedAnswers,
        {
          quesId: questionId,
          answerId: answerId,
        },
      ];
      setSelectedAnswers(tmp);
      localStorage.setItem("quizzId", quizz.id);
      localStorage.setItem("selectedAnswers", JSON.stringify(tmp));
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
      <p>{JSON.stringify(selectedAnswers)}</p>

      {questions.map((question, index) => (
        <div key={question.id} className="question">
          <h2>{question.content}</h2>
          <ul>
            {question.answer.map((answer) => (
              <div key={answer.id}>
                <Checkbox
                  checked={check.includes(answer.id)}
                  onChange={() => handleAnswerClick(question.id, answer.id)}
                />
                {answer.content}
              </div>
            ))}
          </ul>
        </div>
      ))}

      <Button
        onClick={() => {
          handleSubmit();
        }}
      >
        Submit
      </Button>

      {isLoading ? <ProgressSpinner /> : <></>}
    </>
  );
}
