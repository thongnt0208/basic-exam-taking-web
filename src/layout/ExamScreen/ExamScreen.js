import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetQuizzById } from "./ExamService";
import MakeQuizz from "./MakeQuizz/MakeQuizz";
import CountTime from "./MakeQuizz/CountTime";
import { setCountdownTime } from "../../util/CountTime";

export default function ExamScreen() {
  let examId = useParams().id;
  const [quizz, setQuizz] = useState(0);

  

  useEffect(() => {
    GetQuizzById(examId)
      .then((data) => {
        setQuizz(data);
        console.log("quizz", quizz);
      })
      .catch((error) => {
        console.error(error);
      });

      // Set time
      setCountdownTime();
  }, []);

  return (
    <>
      <h1>ExamScreen</h1>
      <p>Exam ID: {examId}</p>
      {/* <p>{JSON.stringify(quizz)}</p> */}
      {/* Input information */}
      {/* Make Quizz */}
      {quizz===0 ? <></> : <MakeQuizz quizz={quizz} />}
      <CountTime/>
    </>
  );
}
