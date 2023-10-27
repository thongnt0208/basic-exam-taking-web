import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HomeScreen() {
  const [userInput, setUserInput] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleButtonClick = () => {
    navigate(`/exam/${userInput}`);
  };

  return (
    <div className="homescreen-container">
      <InputText value={userInput} onChange={handleInputChange} />
      <Button onClick={handleButtonClick}>Start Exam</Button>
    </div>
  );
}