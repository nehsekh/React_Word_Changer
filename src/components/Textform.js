import React, {useState} from 'react'

export default function Textform(props) {
  
    const handleUpClick=()=>{
        console.log("Upper was clicked"+ text);
        let newText=text.toUpperCase();
        setText(newText)
    }
    const handleLoClick=()=>{
      console.log("Lowercase was clicked"+text);
      let newText=text.toLowerCase();
      setText(newText)
    }
    const handleClearClick=()=>{
      let newText='';
      setText(newText)
    }

    const handleOnChange=(event)=>{
        console.log("on change ");
        setText(event.target.value)
    }
    const handleCopy=()=>{
      console.log("on change");
      var text=document.getElementById("myBox");
      text.select();
      document.getSelection().removeAllRanges();
      navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpaces=()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "))
    }
    const[text, setText] = useState('Use Freely');
    //setText("new text");
  return (
<>
    <div className ="container" style={{color:props.mode==='dark'?'white':'#042743'}}> 
            <h1 className='mb-4'>{props.heading}</h1>
          <div className="mb-3">
         <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#13466e'
         :'white',color: props.mode==='dark'?'white':'#042743'}}
         id="myBox" rows="8"></textarea>
     </div>  
     <button disabled={text.length===0}className="btn btn-primary mx-1 my-1"onClick={handleUpClick}>Convert to Uppercase </button>
     <button disabled={text.length===0}className="btn btn-primary mx-1 my-1"onClick={handleLoClick}>Convert to Lowercase </button>
     <button disabled={text.length===0}className="btn btn-primary mx-1 my-1"onClick={handleClearClick}>Clear All </button>
     <button disabled={text.length===0}className="btn btn-primary mx-1 my-1"onClick={handleCopy}>Copy Text </button>
     <button disabled={text.length===0}className="btn btn-primary mx-1 my-1"onClick={handleExtraSpaces}>Remove Spaces</button>
     </div>
      <div className ="container my-2" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Nothing to preview!"}</p>
      </div>  
    </>
  )
}
