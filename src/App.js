import { useEffect, useState } from "react";
import "./App.css";
import GameWrapper from "./components/GameWrapper";
import InputActions from "./components/InputActions";
import InputAnswerList from "./components/InputAnswerList";
import useWordList from "./hooks/useWordList";

function App() {
  const [answerList] = useWordList();
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
      <InputActions
        {...{ currentAttempt, handleUpdateCurrentAttempt, handleEnter }}
      />
    </GameWrapper>
  );
}

export default App;
