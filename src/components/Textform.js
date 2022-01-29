import React, { useState } from 'react';

export default function Textform(prop) {
    const [text, setText] = useState('');
    const Change = (event)=>{
        setText(event.target.value)
    }
    const UpNow = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        prop.showAlert("Changed the text to Upper Case")
    }
    const LowNow = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        prop.showAlert("Changed the text to Lower Case")
    }
    const AddNow = ()=>{
        let newText = text + '.';
        setText(newText);
        prop.showAlert("Added a full stop at the end")
    }
    return (
        <div>
            <div className="mt-5">
                <h1>Enter your Text here</h1>
                <textarea className={`form-control bg-${prop.mode} text-${prop.mode === 'light'?'dark':'light'}`} value={text} onChange={Change} id="exampleFormControlTextarea1" placeholder='Enter the text' rows="8"></textarea>
                <button className="btn btn-primary m-3" onClick={UpNow}>UpperCase now</button>
                <button className="btn btn-primary m-3" onClick={LowNow}>LowerCase now</button>
                <button className="btn btn-primary m-3" onClick={AddNow}>Add fullstop now</button>
            </div>
            <div className="container">
                <h3>The text count</h3>
                <p> {text.split(" ").length} words and {text.length} letter </p>
                <p> {0.008 * text.split(" ").length} minutes to read (125wmp)</p>
            </div>
            <div className="container">
                <h2>Preview</h2>
                <p> {text === ''?'Enter something above to preview here':text} </p>
            </div>
        </div>
    )
}
