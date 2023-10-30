import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setCountdownTime } from "../../util/CountTime";

export default function HomeScreen() {
  const [code, setCode] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setCode(event.target.value);
  };

  const handleButtonClick = () => {
    if (!code) {
      alert("Please enter your name");
      return;
    } else {
      // Set time
      setCountdownTime();
      navigate(`/exam/${code}`);
    }
  };

  return (
    <div className="homescreen-container">
      <InputText value={code} onChange={handleInputChange} />
      <Button onClick={handleButtonClick}>Start Exam</Button>
    </div>
  );
}
