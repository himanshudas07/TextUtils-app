import React , {useState} from 'react'

export default function TextForm(props) {

    const toUpper = () =>{
        setText(text.toUpperCase());

    }

    const toLower = () =>{
        setText(text.toLowerCase());
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const setDefault = () =>{
        setText("Enter text here")
    }

    const copyText = () =>{

        let copyTxt=document.getElementById("textdata");
        copyTxt.select();
        copyTxt.setSelectionRange(0,999999);
        navigator.clipboard.writeText(copyTxt.value);


    }


    const firstLetterUpper= () =>{
       const txtArray=text.split(" ");
       const newTxtArray=[];

       for (let i = 0; i < txtArray.length; i++) {
        const txt=txtArray[i].split("")
        const newTxt=[]
        for (let j=0;j<txt.length;j++){
            if(j===0){
                newTxt.push(txt[j].toUpperCase())
            }
            else{
            newTxt.push(txt[j])
            }
        }
        newTxtArray.push(newTxt.join(""))
      }
       setText(newTxtArray.join(" "))

    }

    const [text,setText]=useState("Enter text here")


  return (
    <>
    <div className='container my-3' style={{color: props.mode==='dark'?'blue':'black'}}>
   
        <h2>{props.heading}</h2>
    <div className="mb-2">
      <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black'}} id="textdata" rows="7"></textarea>
    </div>
    <button type="button" className="btn btn-primary" onClick={setDefault}>Reset</button>
    <button type="button" className="btn btn-primary mx-2" onClick={toUpper}>Convert to upper</button>
    <button type="button" className="btn btn-primary mx-2" onClick={toLower}>Convert to Lower</button>
    <button type="button" className="btn btn-primary mx-2" onClick={firstLetterUpper}>Convert First Letter Upper</button>
    <button type="button" className="btn btn-primary mx-2" onClick={copyText}>Copy Text</button>
  
  </div>
  <div className='container my-3' style={{color: props.mode==='dark'?'blue':'black'}}>
     <h2>Your Text Summary</h2>
     <p>{text.split(" ").length} words and {text.length} characters</p>
     <p> {0.008* text.split(" ").length} Minutes to read</p>
     <h2>Preview</h2>
     <p>{text}</p>
    </div>
  </>
  );
}
