import React from "react";
import { useLocation } from "react-router-dom";

export default function Finish() {
  let score = useLocation().state.score;
  return (
    <div>
      <h1>Finish</h1>
      <p>Score: {score}</p>
    </div>
  );
}
