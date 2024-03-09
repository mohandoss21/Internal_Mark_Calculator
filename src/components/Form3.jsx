import React, { useState } from 'react';
import './style.css';

export default function Form3() {
  const [result, setResult] = useState(null);
  const [error,setErr] = useState(false);
  function submit() {
    let acr = parseInt(document.getElementById('Abservation_cum_record').value) ;
    let m_lab = parseInt(document.getElementById('model_lab').value) ;
    if((!acr|| !m_lab ) && (acr!=0 && m_lab!=0) ) {
       document.getElementById('error').innerHTML='Enter All the Values'
       setErr(true);
    }
    else if(acr>75){
      document.getElementById('error').innerHTML='Maximum Marks for Abservation sum record is 75';
      setErr(true);
    }
    else if(m_lab>25){
      document.getElementById('error').innerHTML='Maximum Marks for Model lab is 25';
      setErr(true);
    }
    else{
      document.getElementById('error').innerHTML='Done';
      let totalMarks = ((acr+m_lab) / 100)*60;
      setErr(false);
      setResult(totalMarks.toFixed(1));
    }
    
  }

  return (
    <div>
      <form>
         Abservation Cum Record:<input type="number" id='Abservation_cum_record' placeholder='enter your marks' />
        Model Lab:<input type="number" id='model_lab' placeholder='enter your marks' />
        <button type="button" onClick={submit}>Submit</button>
        <p id='result'>{result !== null && error!=true? `Your Internal Mark For this Subject is: ${result}`:''}</p>
        <p id='error'></p>
      </form>
    </div>
  );
}
