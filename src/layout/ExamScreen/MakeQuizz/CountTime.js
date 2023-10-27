import React, { useState, useEffect } from "react";
import { SecondsToMinutes } from "../../../util/CountTime";

const CountTime = () => {
  // timeRemaining is the number of seconds remaining in the countdown
  const [timeRemaining, setTimeRemaining] = useState(
    localStorage.getItem("countdownTime")
  );

  useEffect(() => {
    if (timeRemaining > 0) {
      const interval = setInterval(() => {
        const updatedTime = timeRemaining - 1;
        setTimeRemaining(updatedTime);
        localStorage.setItem("countdownTime", updatedTime.toString());

        if (updatedTime <= 0) {
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
