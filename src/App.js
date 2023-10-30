import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/header/Header";
import HomeScreen from "./layout/HomeScreen/HomeScreen";
import ExamScreen from "./layout/ExamScreen/ExamScreen";
import Finish from "./layout/ExamScreen/Result/Finish";
function App() {
  return (
    <>
      <BrowserRouter>
        <header className="App-header">
          <Header />
        </header>
          <Routes>
            <Route path="" element={<HomeScreen />} />
            <Route path="exam" element={<ExamScreen />} />
            <Route path="exam/:id" element={<ExamScreen />} />
            <Route path="exam/finish" element={<Finish />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
