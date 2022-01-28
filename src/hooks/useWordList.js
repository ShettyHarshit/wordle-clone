import { useEffect, useState } from "react";
import answers from "../words/answers-alphabetical.txt";

export default function useWordList() {
  const [answerList, setAnswerList] = useState([]);

  useEffect(() => {
    fetch(answers)
      .then((r) => r.text())
      .then((text) => {
        setAnswerList(text.split("\n"));
      });
  }, []);

  return [answerList];
}
