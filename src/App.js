import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import HomeScreen from "./layout/HomeScreen/HomeScreen";
import ExamScreen from "./layout/ExamScreen/ExamScreen";
import Finish from "./layout/ExamScreen/Result/Finish";
import "./App.scss";
import NotFoundScreen from "./layout/ErrorScreen/NotFoundScreen";
function App() {
  return (
    <BrowserRouter>
      <header className="App-header">
        <Header />
      </header>
      <Routes>
        <Route path="" element={<HomeScreen />} />
        <Route path="exam" element={<ExamScreen />} />
        <Route path="exam/:examId" element={<ExamScreen />} />
        <Route path="exam/finish" element={<Finish />} />
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
