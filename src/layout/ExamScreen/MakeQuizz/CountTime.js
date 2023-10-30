import React, { useState, useEffect } from "react";
import { SecondsToMinutes } from "../../../util/CountTime";
import { SubmitAnswer } from "../ExamService";
import { useNavigate } from "react-router-dom";

const CountTime = () => {
  // timeRemaining is the number of seconds remaining in the countdown
  const [timeRemaining, setTimeRemaining] = useState(
    localStorage.getItem("countdownTime")
  );
  let navigate = useNavigate();

  useEffect(() => {
    if (timeRemaining > 0) {
      const interval = setInterval(() => {
        const updatedTime = timeRemaining - 1;
        setTimeRemaining(updatedTime);
        localStorage.setItem("countdownTime", updatedTime.toString());

        let quizzId = localStorage.getItem("quizzId");
        let selectedAnswers = JSON.parse(
          localStorage.getItem("selectedAnswers")
        );
        if (updatedTime <= 0) {
          // If there is answer selected and time-out -> auto submit
          if (quizzId !== null && selectedAnswers !== null) {
            localStorage.removeItem("selectedAnswers");
            SubmitAnswer(quizzId, selectedAnswers).then((score) => {
              console.log("score", score);
              navigate(`/exam/finish`, { state: { score: score } });
            });
          } else {
            navigate(`/exam/finish`, { state: { score: null } });
          }

          clearInterval(interval);
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [timeRemaining]);

  return (
    <div>
      <h2>Countdown Timer</h2>
      <p>
        Time Remaining: {SecondsToMinutes(timeRemaining)} minutes{" "}
        {timeRemaining % 60} seconds
      </p>
    </div>
  );
};

export default CountTime;
