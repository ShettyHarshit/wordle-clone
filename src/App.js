import { useEffect, useState } from "react";
import "./App.css";
import allowedWords from "./words/allowed-guesses.txt";
import answers from "./words/answers-alphabetical.txt";

function App() {
  const [allowedWordList, setAllowedWordList] = useState([]);
  const [answerList, setAnswerList] = useState([]);
  const [targetWord, setTargetWord] = useState("");
  const [currentAttempt, setCurrentAttempt] = useState("");

  const handleUpdateCurrentAttempt = (text) => {
    const val = text.target.value;
    if (val.length < 6) setCurrentAttempt(val);
  };

  const handleEnter = () => {
    if (answerList.includes(currentAttempt)) {
      alert("noice");
    } else {
      alert("not allowed");
    }
  };

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

  useEffect(() => {
    if (answerList) {
      const randomWordFromList =
        answerList[Math.floor(Math.random() * answerList.length)];
      setTargetWord(randomWordFromList);
    }
  }, [answerList]);

  return (
    <div className="App">
      TARGET WORD: {targetWord}
      <br />
      <input value={currentAttempt} onChange={handleUpdateCurrentAttempt} />
      <button disabled={currentAttempt.length !== 5} onClick={handleEnter}>
        Enter
      </button>
      <button>Remove</button>
    </div>
  );
}

export default App;
