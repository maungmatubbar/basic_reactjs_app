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
    const handleCopyText = () => {
      let selectText = document.getElementById('convertText');
      selectText.select();
      navigator.clipboard.writeText(selectText.value);

    }
    const handleRemoveExtraSpace = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
    }
    const handleOnChange = (event)=>{
        //console.log('On Changed');
        setText(event.target.value)
    }
    const handleClearClick = ()=>{
      let newText = '';
      setText(newText);
    }
    const [text, setText] = useState("");
  return (
    <div>
      <div className="card" style={{ backgroundColor:props.mode==='dark'?'#283478':'white',color:props.mode==='dark'?'white':'grey' }}>
        <div className="card-header">
            <h3>{props.heading}</h3>
        </div>
        <div className="card-body">
            <textarea style={{ backgroundColor:props.mode==='dark'?'#283478':'white',color:props.mode==='dark'?'white':'grey' }} name="" id="convertText" value={text} onChange={handleOnChange} cols="30" rows="10" className='form-control'></textarea>
            <button className='btn btn-primary mt-2 mx-1' onClick={handleUpClick}>Convert to Uppercase</button>
            <button className='btn btn-primary mt-2 mx-1' onClick={handleLoClick}>Convert to Lowercase</button>
            <button className='btn btn-primary mt-2 mx-1' onClick={handleClearClick}>Clear Text</button>
            <button className='btn btn-primary mt-2 mx-1' onClick={handleCopyText}>Copy Text</button>
            <button className='btn btn-primary mt-2 mx-1' onClick={handleRemoveExtraSpace}>Remove Extra Spaces</button>
        </div>
        <div className="card-footer">
          <h2>Your text summary</h2>
          <p>{text.split(" ").length} words and {text.length} characters</p>
          <p>{0.008 * text.split(" ").length} minutes read</p>
          <h2>Preview</h2>
          <p className='cart-text'>{text.length>0?text:"Up above the box write some of text and show preview text"}</p>
        </div>
      </div>
    </div>
  )
}
