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
  let [checked, setChecked] = useState(JSON.parse(localStorage.getItem("selectedAnswers"))?.map(item => item.answerId) || []);
  let navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleAnswerClick = (questionId, answerId) => {
    if (checked.includes(answerId)) {
      // If the Checkbox is already checked, uncheck it and remove it from the selectedAnswers and checked arrays
      setChecked(checked.filter((id) => id !== answerId));
      let tmp = selectedAnswers.filter(
        (item) => item.quesId !== questionId || item.answerId !== answerId
      );
      setSelectedAnswers(tmp);
      localStorage.setItem("selectedAnswers", JSON.stringify(tmp));
    } else {
      setChecked([...checked, answerId]);
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
      {/* <p>{JSON.stringify(selectedAnswers)}</p> */}

      {questions.map((question, index) => (
        <div key={question.id} className="question">
          <h2>{question.content}</h2>
          <ul>
            {question.isMutiple && <p style={{color: "red"}}>Please choose only 1 answer</p>}
            {!question.isMutiple && <p style={{color: "red"}}>Maybe there are more than 1 right answer</p>}
            {question.answer.map((answer) => (
              <div key={answer.id}>
                <Checkbox
                  checked={checked.includes(answer.id)}
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
