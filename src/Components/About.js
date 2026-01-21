import React, { useState } from "react";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function About() {

  const [mystyle, setMystyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const [btntext, setBtnText] = useState("Enable Dark Mode");

  const toggleStyle = () => {
    if (mystyle.color === "black") {
      setMystyle({
        color: "white",
        backgroundColor: "black",
        border: "1px solid white",
      });
      setBtnText("Enable Light Mode");
    } else {
      setMystyle({
        color: "black",
        backgroundColor: "white",
      });
      setBtnText("Enable Dark Mode");
    }
  };

  return (
    <div className="container" style={mystyle}>
      <h1 className="my-3">About Us</h1>
       <hr />

      <div className="my-4">
        <h2>What is TextUtils?</h2>
        <p>
          TextUtils is a simple and powerful text utility application built
          using React. It helps users manipulate and analyze text easily.
        </p>

        <ul>
          <li>✍️ Convert text to Uppercase & Lowercase</li>
          <li>🧹 Remove extra spaces</li>
          <li>📊 Count words and characters</li>
          <li>⏱️ Estimate reading time</li>
          <li>🌙 Supports Light & Dark Mode</li>
        </ul>

        <p>
          This project is created to practice React concepts like
          <strong> useState</strong>, components, props, and routing.
        </p>
      </div>

      <div className="container my-3">
        <button
          onClick={toggleStyle}
          type="button"
          className="btn btn-primary"
        >
          {btntext}
        </button>
      </div>
    </div>
  );
}

