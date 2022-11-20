import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        //console.log('UpperCase was clicked ' + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = () =>{
      let newtext = text.toLocaleLowerCase();
      setText(newtext);
    }
    const handleOnChange = (event)=>{
        //console.log('On Changed');
        setText(event.target.value)
    }
    const [text, setText] = useState("Enter Text");
  return (
    <div>
      <div className="card">
        <div className="card-header">
            <h3>{props.heading}</h3>
        </div>
        <div className="card-body">
            <textarea name="" id="convertText" value={text} onChange={handleOnChange} cols="30" rows="10" className='form-control'></textarea>
            <button className='btn btn-primary mt-2 mx-1' onClick={handleUpClick}>Convert to Uppercase</button>
            <button className='btn btn-primary mt-2 mx-1' onClick={handleLoClick}>Convert to Lowercase</button>
        </div>
        <div className="card-footer">
          <h2>Your text summary</h2>
          <p>{text.split(" ").length} words and {text.length} characters</p>
          <p>{0.008 * text.split(" ").length} minutes read</p>
          <h2>Preview</h2>
          <p className='cart-text'>{text}</p>
        </div>
      </div>
    </div>
  )
}
