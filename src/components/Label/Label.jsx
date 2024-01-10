import React from "react";
import "./Label.css";
function Label({ text, className}) {
  return (
    <div className={`Label ${className ? className : ""}`}>
      {text}
    </div>
  );
}

export default Label;
