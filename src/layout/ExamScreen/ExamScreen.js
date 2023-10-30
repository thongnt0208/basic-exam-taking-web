import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetQuizzById } from "./ExamService";
import MakeQuizz from "./MakeQuizz/MakeQuizz";
import CountTime from "./MakeQuizz/CountTime";
import { ProgressSpinner } from "primereact/progressspinner";
import "../../style/ExamScreen.scss";

export default function ExamScreen() {
  let {examId} = useParams();
  const [quizz, setQuizz] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    GetQuizzById(examId)
      .then((data) => {
        setQuizz(data);
        console.log("quizz", quizz);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <h1>ExamScreen</h1>
      <p>Exam ID: {examId}</p>
      {/* <p>{JSON.stringify(quizz)}</p> */}
      {/* Input information */}
      {isLoading && <ProgressSpinner />}
      {/* Make Quizz */}
      {quizz !== null && <MakeQuizz quizz={quizz} />}
      <div className="count-time-container">
        <CountTime />
      </div>
    </>
  );
}
