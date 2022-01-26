import { useEffect, useState } from "react";
import "./App.css";
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

  return (
    <center>
      TARGET WORD: {targetWord}
      <br />
      {validAttemptList.map((word) => (
        <div style={{ flexDirection: "row", display: "flex" }}>
          {word.split("").map((w, i) => {
            return (
              <div
                style={{
                  height: 20,
                  width: 20,
                  margin: 2,
                  backgroundColor:
                    targetWord[i] === w
                      ? "green"
                      : targetWord.includes(w)
                      ? "yellow"
                      : "grey",
                }}
              >
                {w}
              </div>
            );
          })}
          <br />
        </div>
      ))}
      <br />
      <input value={currentAttempt} onChange={handleUpdateCurrentAttempt} />
      <button disabled={currentAttempt.length !== 5} onClick={handleEnter}>
        Enter
      </button>
    </center>
  );
}

export default App;
