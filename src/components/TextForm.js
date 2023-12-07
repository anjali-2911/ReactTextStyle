import React, { useState } from 'react'

export default function TextForm(props) {
    const [text,setText] = useState('');
    const handleUpclick = ()=>
    {
        console.log("uppercase clicked")
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upperCase","success");
    }
    const onchangeText = (event)=>
    {
        console.log("text getting changed")
        setText(event.target.value);
    }

    const handleLoclick=()=>
    {
        console.log("low clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowerCase","info");

    }
    
  return (
    <>


<h3 style={{color: props.mode==='dark'?'white':'black'}}>{props.heading}</h3>
  <div className="my-3" style={{color: props.mode==='dark'?'white':'black'}}>
    
    <textarea className="form-control" value={text} onChange={onchangeText} id="mybox" rows="8"  style={{backgroundColor: props.mode==='light'?'white':'darkgrey',border: props.mode === 'light' ? '1px solid black' : '1px solid white',color: props.mode==='dark'?'white':'black'}}></textarea>
  </div>
  <button className="btn btn-primary mx-2"  onClick={handleUpclick}>UpperCase</button>
  <button className="btn btn-primary" onClick={handleLoclick}>LowerCase</button>
<div className='container my-3' style={{color: props.mode==='dark'?'white':'black'}}>
<h5> Text Summary</h5>
<h6>{text.split(" ").length}  words and {text.length} characters</h6>
<p>{text.lenght>0?{text}:"Your Text Will Get Display Here"}</p>

</div>
</>

  )
}