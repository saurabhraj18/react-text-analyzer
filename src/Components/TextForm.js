import React, { useState } from "react";

export default function TextForm(props) {

    const isTextEmpty = () => {
  return text.trim().length === 0;
};

    const handleUpClick = () => {
        //console.log("Uppercase was clicked" + text);
        if (isTextEmpty()) return;
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase!", "Success");
    };
     const handleLoClick = () => {
        //console.log("Uppercase was clicked" + text);
        if (isTextEmpty()) return;
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase!", "Success");
    };
    const handleClearText = () => {
    if (isTextEmpty()) return;
  setText("");
  props.showAlert("Text has been Cleared!", "Success");
};

const handleCopyText = () => {
if (isTextEmpty()) return;
  navigator.clipboard.writeText(text);
  props.showAlert("Copied!", "Success");
};

const handleExtraSpaces = () => {
if (isTextEmpty()) return;
  let newText = text.split(/\s+/).join(" ");
  setText(newText);
  props.showAlert("Extra Space removed!", "Success");
};
    const handleOnchange = (event) => {
        //console.log("On Change");
        setText(event.target.value);
    };
    const [text, setText] = useState("");
    //text = "new text"; // wrong way to change the state
    //setText("new text"); // correct way to change the state
    return (
        <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea
                    className="form-control"
                    value={text}
                    onChange={handleOnchange}

                    id="myBox"
                    rows="18"
                ></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>
                Convert to Uppercase
            </button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>
                Convert to Lowercase
            </button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleClearText}>
  Clear Text
</button>

<button className="btn btn-success mx-1 my-1" onClick={handleCopyText}>
  Copy Text
</button>

<button className="btn btn-warning mx-1 my-1" onClick={handleExtraSpaces}>
  Remove Extra Spaces
</button>


        </div>
        <div className="container my-2">
            <h1>Your text summary</h1>
            <p>
  {
    text.trim() === ""
      ? 0
      : text.trim().split(/\s+/).length
  } words
</p>

            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>preview</h2>
            <p>{text}</p>
            <h2>Preview</h2>
            <p>{text.length > 0 ? text : "Nothing to preview!"}</p>

        </div>
        </>
    );
}
