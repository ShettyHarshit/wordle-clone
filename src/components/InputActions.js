import React from "react";

export default function InputActions({
  currentAttempt,
  handleUpdateCurrentAttempt,
  handleEnter,
}) {
  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      handleUpdateCurrentAttempt();
    }
  };
  return (
    <>
      <input value={currentAttempt} onChange={handleUpdateCurrentAttempt} />
      <button
        disabled={currentAttempt.length !== 5}
        onKeyPress={onKeyPress}
        onClick={handleEnter}
      >
        Enter
      </button>
    </>
  );
}
