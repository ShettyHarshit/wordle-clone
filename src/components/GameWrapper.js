import React from "react";
import "../index.css";

export default function GameWrapper({ children }) {
  return <div className="wordle-body-wrapper">{children}</div>;
}
