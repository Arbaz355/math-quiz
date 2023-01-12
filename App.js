import { useState } from "react";
import Menu from "./components/menu";
import Quiz from "./components/quiz";
import EndScreen from "./components/endScreen";
import './App.css';

function App() {

  const [gameState, setGameState] = useState("menu");
  const [userName, setUserName] = useState("");
  const [score, setScore] = useState(0);
  const [question, setQuestion] = useState([]);
  const [noOfQuestion, setNoOfQuestion] = useState(2);
  const [operandRange, setOperandRange] = useState(9);
  const [gameState2, setGameState2] = useState("menu");
  const [userName2, setUserName2] = useState("");
  const [score2, setScore2] = useState(0);
  const [question2, setQuestion2] = useState([]);
  const [noOfQuestion2, setNoOfQuestion2] = useState(2);
  const [operandRange2, setOperandRange2] = useState(9);

  return (
    <div className="app">
      <h1>Math quiz 💡</h1>
      <div className="wrapper">
      <div className="play 1">
      <h2>Screen 1</h2>
        {
        gameState === "menu" && 
        <Menu
          setGameState = {setGameState}
          noOfQuestion = {noOfQuestion}
          operandRange = {operandRange}
          setNoOfQuestion = {setNoOfQuestion}
          setUserName = {setUserName}
          setOperandRange = {setOperandRange}
        />}
        {
         gameState === "playing" && 
         <Quiz 
          question = {question}
          setGameState = {setGameState}
          setQuestion = {setQuestion}
          operandRange = {operandRange}
          setScore = {setScore}
          score = {score}
          noOfQuestion = {noOfQuestion}
         />}
        {
            gameState === "finished" &&  
            <EndScreen 
              question = {question}
              setGameState = {setGameState}
              setQuestion = {setQuestion}
              setScore = {setScore}
              score = {score}
              userName = {userName}
            />}
      </div>
      <div className="play 1">
        <h2>Screen 2</h2>
          {
            gameState2 === "menu" && 
            <Menu 
              setGameState = {setGameState2}
              noOfQuestion = {noOfQuestion2}
              operandRange = {operandRange2}
              setNoOfQuestion = {setNoOfQuestion2}
              setUserName = {setUserName2}
              setOperandRange = {setOperandRange2}
            />}
          {
            gameState2 === "playing" && 
            <Quiz 
              question = {question2}
              setGameState = {setGameState2}
              setQuestion = {setQuestion2}
              operandRange = {operandRange2}
              setScore = {setScore2}
              score = {score2}
              noOfQuestion = {noOfQuestion2}
         />}
          {
            gameState2 === "finished" &&  
            <EndScreen 
              question = {question2}
              setGameState = {setGameState2}
              setQuestion = {setQuestion2}
              setScore = {setScore2}
              score = {score2}
              userName = {userName2}
            />}
      </div>

      </div>
     
     
    </div>
  );
}

export default App;