import React, { useState } from 'react'


export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = Text.toUpperCase();
    setText(newText);
    props.showAlert(" Uppercase Converted", " alert alert-success");
  }
  const handleExtraSpaces = () => {
    let nText = Text.split(/[ ]+/);
    setText(nText.join(" "));
    props.showAlert(" Extra Spaces Deleted", "alert alert-success");
  }
  const handlecopy = () => {
    navigator.clipboard.writeText(Text) 
    props.showAlert("Copied to Clipboard", " alert alert-success");
  }
  const handleDnClick = () => {
    let newText1 = Text.toLowerCase();
    setText(newText1);
    props.showAlert(" Lowercase Converted", " alert alert-success");
  }
  const handleClearClick = () => {
    let newText2 = ("");
    setText(newText2);
    props.showAlert(" Text Cleared", " alert alert-success");
  }
  const handleOnChange = (event) => {
    setText(event.target.value)
  }
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = Text;
    window.speechSynthesis.speak(msg);
    props.showAlert(" Text Spoken", " alert alert-success");
  }
  const [Text, setText] = useState('');

  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1 className='mb-3'>{props.heading} </h1>
        <div className="mb-3">
          <textarea className="form-control" value={Text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'rgb( 36,74,104)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={Text.length === 0} className="btn btn-primary mx-1 my-1 border" onClick={handleUpClick}>Convert to upperCase</button>
        <button disabled={Text.length === 0} className="btn btn-primary mx-1 my-1 border" onClick={handleDnClick}>Convert to lowerCase</button>
        <button disabled={Text.length === 0} className="btn btn-primary mx-1 my-1 border" onClick={handleClearClick}>Clear Text</button>
        <button disabled={Text.length === 0} className="btn btn-primary mx-2 my-1 border" onClick={speak}>Speak</button>
        <button disabled={Text.length === 0} className="btn btn-primary mx-1 my-1 border" onClick={handlecopy}>Copy Text</button>
        <button disabled={Text.length === 0} className="btn btn-primary mx-1 my-2 border" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      </div>
      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>Text Summary</h1>
        <p>{Text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words, {Text.length} characaters</p>
        <p>{0.008*Text.split(/\s+/).filter((element) => {return element.length !== 0}).length} minutes taken to read.</p>
        <h2>Preview</h2>
        <p>{Text.length > 0 ? Text : 'Nothing to Preview ! XOXO '}</p>
      </div>
    </>
  )
}
