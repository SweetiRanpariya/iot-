import React ,{useState} from 'react'

export default function Textform(props) {
    const handleupperclick = ()=>{
        let newText=text.toUpperCase();
        setText(newText)
    }
    const handlelowerclick = ()=>{
        let newText=text.toLowerCase();
        setText(newText)
    }
    const handleonchange = (event)=>{
       setText(event.target.value);
    }
    const CapitalizedClick = () => {
        let words =  text.split(" ").map(word => {
            return word.charAt(0).toUpperCase()+word.slice(1);
        })
        let newText = words.join(" ");
        setText(newText);
    }
    
    
    
    const [text, setText] = useState("");
    return (
        <>
        
        <div className="container my-3"  >
        
            <h1>Enter text to analyze</h1>
            <div className="form-group">
                <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'#7a7a7a':'white',color: props.mode==='dark'?'white':'black'}} onChange={handleonchange} placeholder="enetr text" value={text} rows="10" ></textarea>
                <button className="btn btn-primary m-3" onClick={handleupperclick} >Conver to Uppercase</button>
                <button className="btn btn-primary m-3" onClick={handlelowerclick} >Conver to Lowercase</button>
                <button className="btn btn-primary m-3" onClick={CapitalizedClick} >Conver to Capitalized</button>
                
            </div>
        </div>
        <div className="container">
            <h2>Text summary</h2>
            <p className="ml-5">{text.length>0 ? text.trim().split(" ").length : 0} words and {text.length} characters</p>
            <p className="ml-5">{0.008 * text.split(" ").length } minutes for read</p>
            <h3>preview</h3>
            <p className="ml-5">{text}</p>
        </div>
        </>
    )
}
