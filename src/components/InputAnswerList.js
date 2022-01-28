import React from "react";

export default function InputAnswerList({ list, targetWord }) {
  return (
    <div>
      {list.map((word) => (
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
    </div>
  );
}
