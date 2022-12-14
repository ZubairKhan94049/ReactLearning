import React, {useState} from 'react'
import './style.css';

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
  const reverseText = ()=>{
    let rev1 = []
    for(let i = text.length; i>-1; i--){
      rev1.push(text[i]);
    }
    setText(rev1.toString().replaceAll(',',''));
  }


  const [text, setText] = useState("");

  return (
    <>
      <div>
        <div className="container my-3">
          <h1>{props.heading}</h1>
              <div className="mb-3 d-flex">
                  <textarea className="form-control" value={text} id="myBox" rows={8} defaultValue={""} onChange={handleOnChange} />
                  <div className='find_replace mx-3' >
                    <input type="text" className='btn mb-3' placeholder='Find' name = "find" id="find"/>
                    <input type="text" className='btn mb-3' placeholder='Replace' name = "replace" id = "replace"/>
                    <br/>
                    <button className='btn btn-warning mb-3' onClick={handleClearClick}> Replace </button>
                  </div>
              </div>
              <button className='btn btn-primary mx-1' onClick={handleUpClick}> Upper Case </button>
              <button className='btn btn-primary mx-1' onClick={handleLoClick}> Lower Case </button>
              <button className='btn btn-primary mx-1' onClick={handleClearClick}> Clear Text </button>
              <button className='btn btn-primary mx-1' onClick={reverseText}> Reverse Text </button>
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
