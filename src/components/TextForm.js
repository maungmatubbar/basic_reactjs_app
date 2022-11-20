import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        //console.log('UpperCase was clicked ' + text);
        let newText = text.toUpperCase();
        setText(newText);
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
            <button className='btn btn-primary mt-2' onClick={handleUpClick}>Convert to Uppercase</button>
        </div>
      </div>
    </div>
  )
}
