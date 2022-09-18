import React, { useState } from 'react'

export default function TextForm(props) {
  const handleUpClick = () => {
    let upperText = text.toUpperCase();
    setText(upperText);
  }
  const handleOnChange = (event) => {
    setText(event.target.value);
  }
  const handleLowClick = () => {
    let lowerText = text.toLowerCase();
    setText(lowerText);
  }
  const handleLClear = () => {
    setText('');
  }
  const handleSpaceClick = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(' '));
  }
  const handleCopyClick = () => {
    let copyText = document.getElementById("textBox");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
  }
  const [text, setText] = useState('Enter Text Here');
  return (
    <>
      <div style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1 Style='text-align:center;margin-top:20px; margin-bottom:25px;font-weight:800;' >{props.heading}</h1>
        <div className="container" style={{ textColor: props.mode === 'dark' ? 'white' : 'dark' }}>
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#131c3d' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="textBox" rows="10" />
          <div className='container mx-auto' Style='text-align:center;'>
            <button disabled={text.length === 0} className='btn btn-primary mt-4 mx-2' onClick={handleLowClick}>convert lowercase</button>
            <button disabled={text.length === 0} className='btn btn-primary mt-4' onClick={handleLClear}>Clear Text</button>
            <button disabled={text.length === 0} className='btn btn-primary mt-4 mx-2' onClick={handleSpaceClick}>Remove ExtraSpace</button>
            <button disabled={text.length === 0} className='btn btn-primary mt-4 ' onClick={handleCopyClick}>Copy Text</button>
            <button disabled={text.length === 0} className='btn btn-primary mt-4 mx-2' onClick={handleUpClick}>CONVERT UPPERCASE</button>
          </div>
        </div>
        <div className='container my-4' Style='text-align:center;font-weight:700;'>
          {text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Words and {text.length - text.split(/\s/).length + 1} Characters

        </div>
      </div>

    </>
  )
}
