import { useEffect, useState } from "react";
import "./App.css";
import GameWrapper from "./components/GameWrapper";
import InputAnswerList from "./components/InputAnswerList";
import answers from "./words/answers-alphabetical.txt";

function App() {
  const [answerList, setAnswerList] = useState([]);
  const [targetWord, setTargetWord] = useState("");
  const [currentAttempt, setCurrentAttempt] = useState("");
  const [validAttemptList, setValidAttemptList] = useState([]);

  const handleUpdateCurrentAttempt = (text) => {
    const val = text.target.value;
    if (val.length < 6) setCurrentAttempt(val);
  };

  const handleEnter = () => {
    if (answerList.includes(currentAttempt)) {
      setValidAttemptList(validAttemptList.concat(currentAttempt));
      setCurrentAttempt("");
    } else {
      alert("not allowed");
    }
  };

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

  console.log("🚀 ~ file: App.js ~ line 54 ~ App ~ targetWord", targetWord);
  return (
    <GameWrapper>
      <h3 className="game-title">WORDLE CLONE</h3>
      <InputAnswerList list={validAttemptList} targetWord={targetWord} /> <br />
      <input value={currentAttempt} onChange={handleUpdateCurrentAttempt} />
      <button
        disabled={currentAttempt.length !== 5}
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            handleUpdateCurrentAttempt();
          }
        }}
        onClick={handleEnter}
      >
        Enter
      </button>
    </GameWrapper>
  );
}

export default App;
