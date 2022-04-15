import React from 'react';
import { useState } from 'react';
import "../Card/Card.css";
import { v4 as uuidv4 } from 'uuid';


export default function Card() {
  const[button1, setButton1] = useState("");
  const[button2, setButton2] = useState("");
  const[button3, setButton3] = useState("");
  const[button4, setButton4] = useState("");
  const[data, setData] = useState([]);


  const submitHandler = (event)=>{
    event.preventDefault();
    if(button1 && button2 && button3 && button4){
    const newData = [{id:uuidv4(), button1, button2, button3, button4}]
    setData(...data, newData)
    
    setButton1("");
    setButton2("");
    setButton3("");
    setButton4("")
    }else{
      alert("Please fill card number")
    }

  }

  return (
    <>
    <div className='card-container'>
      <form >
      <div className='card-box'>
      <label htmlFor='card' className='text'>Card Number*</label>
      <input id='card' required   type="number" autoFocus value={button1} onChange={(e)=>setButton1(e.target.value)}/>
      <input id='card' required   type="number" autoFocus value={button2} onChange={(e)=>setButton2(e.target.value)} />
      <input id='card' required   type="number" autoFocus value={button3} onChange={(e)=>setButton3(e.target.value)}/>
      <input id='card' required   type="number" autoFocus value={button4} onChange={(e)=>setButton4(e.target.value)}/>
      <br/>
      <div>
      <button onClick={submitHandler}>Submit</button>
      </div>
     
        
      
      </div>
      </form>
    </div>
    <div className='number'>
     {
       data.map((element)=>{
         const{id, button1, button2, button3, button4} = element
        return(
          <div className='shownumber' key={id}>
          {alert(`Your card number is ${button1}${button2}${button3}${button4}`)}
          </div>
        )
       }
       )

    
      } 
    </div>
    </>
  )
}
