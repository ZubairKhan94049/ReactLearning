import React, {useState} from 'react'


export default function TextForm(props) {
  const handleOnChange = (event)=>{
    console.log("Handle On Changed");
    setText(event.target.value)
  }
  
  const handleUpClick = ()=>{
    let upperText = text.toUpperCase();
    setText(upperText);
  }
  const handleLoClick = ()=>{
    let upperText = text.toLowerCase();
    setText(upperText);
  }
  const handleClearClick = ()=>{
    let upperText = '';
    setText(upperText);
  }


  const [text, setText] = useState("Enter your text here");
  return (
    <>
      <div>
        <div className="container my-3">
          <h1>{props.heading}</h1>
              <div className="mb-3">
                  <label htmlFor="myBox" className="form-label">An application that can manupulate your text by just clicking on the buttons</label>
                  <textarea className="form-control" value={text} id="myBox" rows={8} defaultValue={""} onChange={handleOnChange} />
              </div>
              <button className='btn btn-primary mx-1' onClick={handleUpClick}> Upper Case </button>
              <button className='btn btn-primary mx-1' onClick={handleLoClick}> Lower Case </button>
              <button className='btn btn-primary mx-1' onClick={handleClearClick}> Clear Text </button>
        </div>
        <div className="container my-3">
          <h1>Your Text Summary</h1>
          <p>{text.split(" ").length} Words and {text.length} Characters</p>
          <p>{0.008 * text.split(" ").length} Minutes are needed to read</p>
        </div>
      </div>

    </>
  )
}
