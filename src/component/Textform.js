import React ,{useState} from 'react'

export default function Textform() {
    const handleupperclick = ()=>{
        let newText=text.toUpperCase();
        setText(newText)
    }
    const handleonchange = (event)=>{
       setText(event.target.value);
    }
    const [text, setText] = useState("");
    return (
        <div className="container my-3">
            <h1>Enter text to analyze</h1>
            <div className="form-group">
                <textarea className="form-control" onChange={handleonchange} placeholder="enetr text" value={text} rows="10" id="comment"></textarea>
                <button className="btn btn-primary m-3" onClick={handleupperclick} >Conver to uppercase</button>
            </div>
        </div>
    )
}
