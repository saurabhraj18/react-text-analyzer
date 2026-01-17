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

      <div className="accordion" id="accordionExample">

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
            >
              Accordion Item #1
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show">
            <div className="accordion-body">
              First accordion body
            </div>
          </div>
        </div>

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

