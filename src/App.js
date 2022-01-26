import { useEffect, useState } from "react";
import "./App.css";
import logo from "./logo.svg";
import allowedWords from "./words/allowed-guesses.txt";
import answers from "./words/answers-alphabetical.txt";

function App() {
  const [allowedWordList, setAllowedWordList] = useState([]);
  const [answerList, setAnswerList] = useState([]);

  useEffect(() => {
    fetch(allowedWords)
      .then((r) => r.text())
      .then((text) => {
        setAllowedWordList(text.split("\n"));
      });
  }, []);

  useEffect(() => {
    fetch(answers)
      .then((r) => r.text())
      .then((text) => {
        setAnswerList(text.split("\n"));
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
